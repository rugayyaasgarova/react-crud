import { Link, useParams } from "react-router-dom";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { getData } from "../../../services/api";
import { endpoints } from "../../../constants";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getData(`${endpoints.PRODUCTS}/${id}`)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <div className={styles["product-details"]}>
      <div className="imageHolder"> 
      <img src={product.image} alt={product.title} />
      </div>
      <div className="detailsHolder">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h4>Price: ${product.price}</h4>
      <Link to={"/products"}>
        <button>Go Back</button>
      </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
