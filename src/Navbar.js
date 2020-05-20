import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/ordenes">
              Orden
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/horarioOrden">
              Orden Horario
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link " to="/clientes">
              Clientes
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0"></form>
      </div>
    </nav>
  );
};

export default Navbar;
