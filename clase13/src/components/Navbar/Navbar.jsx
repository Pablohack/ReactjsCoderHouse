import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Cart from "../Cart/Cart";
import { AppBar } from "@mui/material";
import "./Navbar.css";

const NavBar = ({ menus, categorias }) => {
  return (
    <AppBar position="static" className="navbar">
      <div className="">
        {categorias.map((categoria) => {
          return (
            <Link
              to={`/category/${categoria.id}`}
              className="navbar__category-link" data-replace={`${categoria.name}`}>
              <span>{categoria.name}</span>
            </Link>
          );
        })}
      </div>
      <Cart />
    </AppBar>
  );
};

export default NavBar;
