import Logo from "../assets/Logo.jpg";
import CardWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="border-top py-2">
      <Link to="/">
        <img className="img img-fluid img-thumbnail" src={Logo} alt="Logo" />
      </Link>
      <div className="navbar navbar-expand-lg container navbar-light">
        <a
          href="#"
          className="navbar-brand d-lg-none fs-5 fw-bold text-uppercase"
        >
          Categorias
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navegacion"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navegacion" className="collpase navbar-collapse">
          <nav className="navbar-nav container text-center d-flex flex-md-row justify-content-md-around">
            <NavLink
              to="/category/Jordan"
              className="text-decoration-none text-dark fs-4"
            >
              Jordan
            </NavLink>
            <NavLink
              to="/category/AirMax"
              className="text-decoration-none text-dark fs-4"
            >
              Air Max
            </NavLink>
            <NavLink
              to="/category/AirForce"
              className="text-decoration-none text-dark fs-4"
            >
              Air Force 1
            </NavLink>
            <NavLink
              to="/category/Dunk"
              className="text-decoration-none text-dark fs-4"
            >
              Dunk
            </NavLink>
            <CardWidget />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
