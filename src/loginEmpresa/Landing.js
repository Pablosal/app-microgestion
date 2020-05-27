import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { logearse, insertData } from "../clientesempresa/EmpresaAction";
import Orden from "../formsempresa/Orden";
const Landing = () => {
  const dispatch = useDispatch();
  const [path, setPath] = useState(1);
  const [signed, setSigned] = useState(false);
  const [token] = useState(uuidv4());
  const [empresaDatos, setEmpresaDatos] = useState({
    nombre: "",
    start: "",
    end: "",
  });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setPath(3);
      dispatch(logearse(localStorage.getItem("token")));
      setSigned(true);
    }
  }, []);
  const manejarCambio = (e) => {
    setEmpresaDatos({ ...empresaDatos, [e.target.name]: e.target.value });
  };
  const subirInfo = (e) => {
    e.preventDefault();
    setSigned(!signed);
    setPath(3);
    if (!token) return;
    dispatch(logearse(token));
    dispatch(
      insertData({
        nombre: empresaDatos.nombre,
        start: empresaDatos.start,
        end: empresaDatos.end,
      })
    );
  };

  switch (path) {
    case 1:
      return (
        <div
          className="container d-flex justify-content-center flex-column align-items-center"
          style={{ height: "100vh" }}
        >
          {" "}
          <h1 style={{ color: "#1E3264" }}>
            Ordenador de ordenes para Delivery
          </h1>
          <p style={{ color: "#1E3264" }}>
            Ordena tus pedidos de manera sencilla y ordenada, inicia sesion con
            tu cuenta google para iniciar
          </p>
          <button
            onClick={() => setPath(2)}
            className="btn btn-success btn-block"
          >
            Ingresar
          </button>
        </div>
      );

    case 2:
      return (
        <section
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ backgroundColor: "#DCEFF5" }}>
            <form onSubmit={subirInfo}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  className="form-control"
                  type="text"
                  value={empresaDatos.nombre}
                  onChange={manejarCambio}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nombre">Horario</label>
                <input
                  id="start"
                  name="start"
                  className="form-control"
                  type="number"
                  value={empresaDatos.start}
                  onChange={manejarCambio}
                />
                <input
                  id="end"
                  name="end"
                  className="form-control"
                  type="number"
                  value={empresaDatos.end}
                  onChange={manejarCambio}
                />
              </div>
              <input
                type="submit"
                className="btn btn-success"
                value="Subir Info"
              />
            </form>
          </div>
        </section>
      );
    case 3:
      return <Orden />;
    default:
      return;
  }
};

export default Landing;
