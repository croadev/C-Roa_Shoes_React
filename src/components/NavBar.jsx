import Logo from "../assets/Logo.jpg";
import CardWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div class="border-top py-2">
      <img class="img img-fluid img-thumbnail" src={Logo} alt="" />
      <div class="navbar navbar-expand-lg container navbar-light">
        <a href="#" class="navbar-brand d-lg-none fs-5 fw-bold text-uppercase">
          Categorias
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navegacion"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navegacion" class="collpase navbar-collapse">
          <nav class="navbar-nav container text-center d-flex flex-md-row justify-content-md-around">
            <a href="#" class="text-decoration-none text-dark fs-4">
              jordan
            </a>
            <a href="#" class="text-decoration-none text-dark fs-4">
              Air Max
            </a>
            <a href="#" class="text-decoration-none text-dark fs-4">
              Air Force 1
            </a>
            <a href="#" class="text-decoration-none text-dark fs-4">
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
