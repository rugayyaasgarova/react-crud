import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";

import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
const Favorites = () => {
  const { favs, toggleFavorites, clearAllFavs } = useContext(FavoritesContext);

  if (favs.length === 0) {
    return (
      <p className={styles["emptyMessage"]}>Your favorites list is empty!</p>
    );
  }
  return (
    <>
      <div className="cards-container">
        {favs.map((product) => (
          <div key={product.id} className="card">
            <button
              className="heartIcon"
              onClick={() => {
                toggleFavorites(product);
              }}
            >
              <FaHeart style={{ color: "red" }} />
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
      <button
        className={styles["clearBtn"]}
        onClick={() => {
          clearAllFavs();
        }}
      >
        Empty All
      </button>
    </>
  );
};

export default Favorites;
