import React, { useEffect, useState } from "react";
import ClientesEmpresa from "../clientesempresa/ClientesEmpresa";
const OrdenFormClienteViejo = ({ clientes }) => {
  const [date, setDate] = useState();
  useEffect(() => {
    var today = new Date();
    var xdate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    setDate(xdate);
    console.log(date);
  });
  return (
    <form
      className="container p-4 bg-light"
      style={{ width: "450px", float: "right" }}
    >
      <div
        className="center-column m-4 form-group"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {
          <ClientesEmpresa
            key={clientes[0].id}
            cliente={clientes[0]}
          ></ClientesEmpresa>
        }
        {/* {clientes.map((m) => (
        <ClientesEmpresa key={m.id} cliente={m}></ClientesEmpresa>
        ))} */}
      </div>

      <div className="row ">
        <div className="col">
          <div className="form-group">
            <label htmlFor="FechaEntrega">Fecha Entrega</label>
            <input
              className="form-control"
              id="FechaEntrega"
              type="date"
              min="2018-01-01"
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="FechaEntrega">Horario de Entrega</label>
            <input
              className="form-control"
              type="time"
              id="appt"
              name="appt"
              min="09:00"
              max="18:00"
              required
            />
          </div>
        </div>
      </div>
      <input
        type="submit"
        value="Subir Orden"
        className=" form-control btn btn-success btn-block"
      />
    </form>
  );
};

export default OrdenFormClienteViejo;
