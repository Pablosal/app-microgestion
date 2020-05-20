import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { eliminarCliente, modificarCliente } from "./ClientesActions";
import "./ClientesEmpresa.css";
import Gravatar from "react-gravatar";
const ClientesEmpresa = ({ cliente }) => {
  const dispatch = useDispatch();
  const [enEdicion, setEnEdicion] = useState(false);
  const [informacion, setInformacion] = useState({
    direccion: "",
    telefono: 0,
    id: "",
  });

  const handleChange = (e) => {
    setInformacion({
      ...informacion,
      id: cliente.id,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div
      className="carta m-2"
      style={{
        width: "600px",
        maxHeight: "500px",
        height: "350px",
      }}
    >
      <div className="carta-img-side">
        <Gravatar email={`${cliente.nombre}@gmail.com`} size={120} />
      </div>
      <div className="carta-body">
        <div className="d-flex flex-row justify-content-around align-items-center">
          <h4 className="carta-titulo">{cliente.nombre}</h4>
          <i
            className=" btn far fa-edit fa-2x"
            onClick={() => {
              setEnEdicion(!enEdicion);
              console.log(enEdicion);
            }}
          ></i>
        </div>
        <div className="carta_seccion_columna_one">
          <div className="control m-2">
            <h5 className="card-title">Direccion </h5>
            <i className="fas fa-house-user fa-2x"></i>
            {enEdicion ? (
              <input
                type="text"
                name="direccion"
                value={informacion.direccion}
                placeholder={cliente.direccion}
                onChange={handleChange}
              />
            ) : (
              <h6 className="card-subtitle mb-2 text-muted">
                {cliente.direccion}
              </h6>
            )}
          </div>
          <div className="control m-2">
            <h5 className="card-title">Telefono</h5>
            <i className="fas fa-mobile-alt fa-2x"></i>
            {enEdicion ? (
              <input
                type="text"
                name="telefono"
                value={informacion.telefono}
                placeholder={cliente.telefono}
                onChange={handleChange}
              />
            ) : (
              <h6 className="card-subtitle mb-2 text-muted">
                <strong>{cliente.telefono}</strong>
              </h6>
            )}
          </div>
        </div>
        <div className="carta_seccion_columna_two">
          {" "}
          {enEdicion && (
            <button
              className="btn btn-success m-1"
              onClick={() => {
                dispatch(modificarCliente(informacion));
                setEnEdicion(false);
              }}
            >
              Aceptar
            </button>
          )}
          <button
            onClick={(e) => dispatch(eliminarCliente(cliente.id))}
            className="btn btn-danger"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientesEmpresa;
