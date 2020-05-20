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
    fechaEntrega: "2020-05-13",
    horaEntrega: "12:32",
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
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={nuevoCliente.telefono}
            onChange={manejarCambio}
          />
        </small>
      </div>

      <div className="row ">
        <div className="col">
          <div className="form-group">
            <label htmlFor="FechaEntrega">Fecha Entrega</label>
            <input
              className="form-control"
              name="fechaEntrega"
              id="FechaEntrega"
              type="date"
              min="2018-01-01"
              value={nuevoCliente.fechaEntrega}
              onChange={manejarCambio}
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="horario">Horario de Entrega</label>
            <input
              className="form-control"
              type="time"
              id="horario"
              name="horarioEntrega"
              min="09:00"
              max="18:00"
              value={nuevoCliente.horarioEntrega}
              onChange={manejarCambio}
            />
          </div>
        </div>
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
