import Logo from "../assets/Logo.jpg";
import CardWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="border-top py-2">
      <img className="img img-fluid img-thumbnail" src={Logo} alt="" />
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
            <a href="#" className="text-decoration-none text-dark fs-4">
              jordan
            </a>
            <a href="#" className="text-decoration-none text-dark fs-4">
              Air Max
            </a>
            <a href="#" className="text-decoration-none text-dark fs-4">
              Air Force 1
            </a>
            <a href="#" className="text-decoration-none text-dark fs-4">
              Dunk
            </a>
            <CardWidget />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
