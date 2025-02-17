import { useContext, useEffect, useState } from "react";
import { getData } from "../../../services/api";
import { endpoints } from "../../../constants";
import "../Products/Products.scss";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FavoritesContext } from "../../../context/FavoritesContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const { toggleFavorites, favs } = useContext(FavoritesContext);

  const handleSearch = (e) => {
    const searchValue = e.target.value.trim().toLowerCase();
    setSearchQuery(searchValue);
  };

  const handleSort = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery)
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === "default") {
      return 0;
    } else if (sortOrder === "desc") {
      return b.price - a.price;
    } else {
      return a.price - b.price;
    }
  });

  useEffect(() => {
    getData(endpoints.PRODUCTS)
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div style={{ fontSize: "3rem", textAlign: "center", marginTop: "10%" }}>
        <p>LOADING...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ fontSize: "3rem" }}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Products</h1>

      <div
        className="searchSort"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <input
          style={{ width: "300px", marginLeft: "20px" }}
          type="search"
          onChange={handleSearch}
        />
        <select
          style={{ marginRight: "20px" }}
          value={sortOrder}
          onChange={handleSort}
        >
          <option value="default">Sort by default</option>
          <option value="asc">Sort by Price Asc</option>
          <option value="desc">Sort by Price Desc</option>
        </select>
      </div>
      <div className="cards-container">
        {products.length > 0 &&
          sortedProducts.map((product) => (
            <div key={product.id} className="card">
              <button
                className="heartIcon"
                onClick={() => {
                  toggleFavorites(product);
                }}
              >
                {favs.find((q) => q.id === product.id) ? (
                  <FaHeart style={{color:"red"}}  />
                ) : (
                  <FaRegHeart  style={{color:"red"}}/>
                )}
              </button>
              <img
                className="ProductImg"
                src={product.image}
                alt={product.title}
              />

              <Link to={`${product.id}`}>
                <h3>{product.title}</h3>
              </Link>
              <p className="card-description">
                {product.description.slice(0, 100) + "..."}
              </p>
              <p>Price: ${product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
