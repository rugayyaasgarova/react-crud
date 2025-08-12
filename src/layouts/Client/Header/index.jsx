import { NavLink } from "react-router-dom"
import "./index.scss"
import { useContext, useState } from "react"
import { FavoritesContext } from "../../../context/FavoritesContext"


const Header = () => {
  const {favs} = useContext(FavoritesContext);
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header>
      <div className="container">
        <div className="header">
          <h2>React App (Client Side)</h2>
          <button className="menu-toggle" onClick={()=> setMenuOpen(!menuOpen)}>
          ☰
          </button>
          <nav className={menuOpen ? "open": ""}>
            <ul>
              <li>
                <NavLink to={"/"} end>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} end>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/about"} end>About</NavLink>
              </li>
              <li>
                <NavLink to={"/products"} end>Products</NavLink>
              </li>
              <li>
                <NavLink to={"/favorites"} end>Favorites <sup>{favs.length}</sup></NavLink>
              </li>
              <li>
                <NavLink to={"/admin"} end>Admin</NavLink>
              </li>
              
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header