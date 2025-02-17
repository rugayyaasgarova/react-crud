import { useEffect, useState } from "react";
import { deleteDataById, getData } from "../../../services/api";
import { endpoints } from "../../../constants";
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import styles from "./index.module.scss";
const Products = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await deleteDataById(endpoints.PRODUCTS, id);
          if (response.status === 200) {
            setProducts(products.filter((product) => product.id != id));
          }
        } catch (error) {
          console.log(error); 
        }
      }
    });
  };

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
      <div style={{ fontSize: "3rem" }}>
        <p style={{ textAlign: "center", marginTop: "20%" }}> LOADING...</p>
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
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {products &&
            products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>
                    <img width={100} src={product.image} alt={product.title} />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>
                    <div>
                      <button
                        className={styles.deleteBtn}
                        onClick={() => handleDelete(product.id)}
                      >
                        <FaRegTrashCan style={{ color: "white" }} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
