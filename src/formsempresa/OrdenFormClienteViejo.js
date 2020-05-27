import React, { useState } from "react";
import Autocomplete from "react-autocomplete";
import { useDispatch } from "react-redux";
import { agregarOrden } from "../clientesempresa/ClientesActions";
const OrdenFormClienteViejo = ({ clientes }) => {
  const [nuevaOrden, setNuevaOrden] = useState({
    nombre: "",
    fechaEntrega: "2020-05-26",
    horaEntrega: "12:32",
    precio: 150.0,
    completado: true,
  });
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(agregarOrden(nuevaOrden));
  };

  const onChange = (e) => {
    setNuevaOrden({ ...nuevaOrden, [e.target.name]: e.target.value });
  };
  return (
    <form
      onSubmit={onSubmit}
      className="container p-4 bg-light"
      style={{ width: "450px", float: "right" }}
    >
      <div className="center-column m-4 form-group">
        <div className="col form-group">
          <label htmlFor="nombre">Nombre</label>
          <Autocomplete
            id="nombre"
            getItemValue={(clientes) => clientes.nombre}
            items={clientes.clientes}
            renderItem={(item, isHighlighted) => (
              <div
                className="form-control"
                key={clientes.clientes.id}
                style={{
                  background: isHighlighted ? "lightgray" : "white",
                  cursor: "pointer",
                }}
              >
                {item.nombre}
              </div>
            )}
            value={nuevaOrden.nombre}
            onChange={(e) =>
              setNuevaOrden({ ...nuevaOrden, nombre: e.target.value })
            }
            onSelect={(val) => setNuevaOrden({ ...nuevaOrden, nombre: val })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="FechaEntrega">Fecha Entrega</label>
          <input
            className="form-control"
            id="FechaEntrega"
            name="fechaEntrega"
            onChange={onChange}
            type="date"
            min="2020-05-25"
            value={nuevaOrden.fechaEntrega}
          />
        </div>
      </div>
      <div className="col">
        <div className="form-group">
          <label htmlFor="FechaEntrega">Horario de Entrega</label>
          <input
            onChange={onChange}
            className="form-control"
            type="time"
            id="appt"
            name="horaEntrega"
            min="09:00"
            max="18:00"
            required
            value={nuevaOrden.horaEntrega}
          />
        </div>

        <input
          type="submit"
          value="Subir Orden"
          className=" form-control btn btn-success btn-block"
        />
      </div>
    </form>
  );
};

export default OrdenFormClienteViejo;
