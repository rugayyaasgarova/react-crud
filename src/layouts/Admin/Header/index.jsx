import { NavLink } from "react-router-dom"
import "./index.scss"

const AdminHeader = () => {
  return (
    <header  style={{backgroundColor:"blue"}}>
      <div className="container" >
        <div className="header">
          <h2>React App(Admin Side)</h2>
          <nav>
          <ul>
              <li>
                <NavLink to={"/admin"} end >Dashboard</NavLink>
              </li>
              <li>
                <NavLink to={"/admin/products"} end >Products</NavLink>
              </li>
              <li>
                <NavLink to={"/admin/products/new"} end >Add Product</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader