import React from "react";
const OredenesDeClientes = (props) => {
  return (
    <table className="table table-bordered table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Fecha</th>
          <th scope="col">Hora</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        {props.ordenes.map((o, idx) => (
          <tr key={o.nombre}>
            <th scope="row">{idx + 1}</th>
            <td>{o.nombre}</td>
            <td>{o.fechaEntrega}</td>
            <td>{o.horaEntrega}</td>
            <td>{o.precio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OredenesDeClientes;
