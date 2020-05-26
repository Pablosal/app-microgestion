import React, { useState } from "react";
import { añadirCliente } from "../clientesempresa/ClientesActions";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
const OrdenFormClienteNuevo = (props) => {
  const dispatch = useDispatch();
  const instrumentaria = useSelector((state) => state.EmpresaReducer)
    .instrumentaria;
  console.log(instrumentaria);
  const [nuevoCliente, setNuevoCliente] = useState({
    id: uuidv4(),
    nombre: "Zacarias Dominguez",
    direccion: "El turdio 555",
    telefono: 582558920,
    pedido: [],
    fechaEntrega: "2020-06-06",
    horaEntrega: "15:30",
  });
  const manejarCambio = (e) => {
    setNuevoCliente({
      ...nuevoCliente,
      [e.target.name]: e.target.value,
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    setNuevoCliente({
      ...nuevoCliente,
      id: uuidv4(),
    });
    dispatch(añadirCliente(nuevoCliente));
  };
  return (
    <form
      className="container bg-light p-4"
      style={{ width: "450px", float: "right" }}
      onSubmit={manejarEnvio}
    >
      <h3>Añade un nuevo cliente</h3>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          className="form-control"
          type="text"
          value={nuevoCliente.nombre}
          onChange={manejarCambio}
        />
      </div>
      <div className="form-group">
        <label htmlFor="direccion">Direccion</label>
        <input
          className="form-control"
          name="direccion"
          id="direccion"
          type="text"
          value={nuevoCliente.direccion}
          onChange={manejarCambio}
        />
      </div>
      <div className="form-group">
        <label htmlFor="telefono">Telefono</label>

        <small>
          <strong>+569</strong>
          <input
            className="form-control"
            id="telefono"
            type="tel"
            name="telefono"
            value={nuevoCliente.telefono}
            onChange={manejarCambio}
          />
        </small>
      </div>

      <input
        type="submit"
        value="Subir Orden"
        className=" btn btn-success btn-block"
      />
    </form>
  );
};

export default OrdenFormClienteNuevo;
