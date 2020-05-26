import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  let par = useLocation();
  console.log(par.pathname);

  const backgroundChange = () => {
    if (par.pathname === "/") {
      return "transparent";
    } else {
      return "red";
    }
  };
  return (
    <nav
      className="navbar navbar-expand-lg  "
      style={{
        zIndex: "0",
        width: "100%",
        background: backgroundChange(),
        color: "#1E3264",
      }}
    >
      <NavLink className="navbar-brand" to="/" style={{ color: "#1E3264" }}>
        Inicio
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          className="navbar-nav mr-auto"
          style={{ backgroundColor: backgroundChange() }}
        >
          <li className="nav-item">
            <NavLink
              style={{ color: "#1E3264" }}
              className="nav-link"
              to="/horarioOrden"
            >
              Orden Horario
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              style={{ color: "#1E3264" }}
              className="nav-link "
              to="/clientes"
            >
              Clientes
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0"></form>
      </div>
    </nav>
  );
};

export default Navbar;
