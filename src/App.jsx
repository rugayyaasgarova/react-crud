import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClientLayout from "./layouts/Client";
import AdminLayout from "./layouts/Admin";
import Home from "./pages/Client/Home";
import Contact from "./pages/Client/Contact";
import Products from "./pages/Client/Products";
import Dashboard from "./pages/Admin/Dashboard";
import ProductsAdmin from "./pages/Admin/Products";
import AddProduct from "./pages/Admin/AddProduct";
import EditProduct from "./pages/Admin/EditProduct";
import ProductDetails from "./pages/Client/ProductDetails";
import NotFound from "./pages/Client/NotFound";
import About from "./pages/Client/About";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />

          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products">
            <Route index element={<ProductsAdmin />} />
            <Route path="new" element={<AddProduct />} />
            <Route path="edit" element={<EditProduct />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
