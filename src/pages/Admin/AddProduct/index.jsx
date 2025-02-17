import { useState } from "react";
import {addNewData} from "../../../services/api"
import { endpoints } from "../../../constants";
import styles from './index.module.scss'; 
const AddProduct = () => {
  const  [product, setProduct] = useState({
    title: "",
    price: 0,
    image: "",
    description: ""
  })
  const handleSubmit = async (e) =>{
   e.preventDefault()
   console.log(product)

   await addNewData( endpoints.PRODUCTS, product)

   setProduct({
    title: "",
    price: 0,
    image: "",
    description: ""
  });
  }
  return (
    <div className={styles.container}>
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" name="name" id="title"  value={product.title} onChange={(e) => {
        setProduct({...product, title: e.target.value})
      }} />
      <label>Price</label>
      <input type="number" name="name" id="price" value={product.price}  onChange={(e) => {
        setProduct({...product, price: e.target.value})
      }} />
      <label>Image URL</label>
      <input type="url" name="name" id="url" value={product.image}  onChange={(e) => {
        setProduct({...product, image: e.target.value})
      }} />
      <label>Description</label>
      <input type="text" name="name" id="description" value={product.description} onChange={(e) => {
        setProduct({...product, description: e.target.value})
      }} />
      <input type="submit"  />
    </form>
  </div>
  )
};

export default AddProduct;
