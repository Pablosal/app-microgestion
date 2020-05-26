import React, { useState } from "react";
import OrdenFormClienteNuevo from "./OrdenFormClienteNuevo";
import OrdenFormClienteViejo from "./OrdenFormClienteViejo";
import { useSelector } from "react-redux";
import OredenesDeClientes from "../clientesempresa/OredenesDeClientes";

const Orden = (props) => {
  let clientela = useSelector((state) => state.ClientesReducer);

  const [cliente, setCliente] = useState(true);
  return (
    <div
      className=" p-3 "
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#DCEFF5",
        height: "100vh",
      }}
    >
      <div>
        <h3>Tus Ordenes Pendientes</h3>
        <OredenesDeClientes ordenes={clientela.ordenes} />
      </div>
      <div>
        <h2>Ingresa Una Nueva Orden</h2>
        <OrdenFormClienteViejo clientes={clientela} />
      </div>
    </div>
  );
};

export default Orden;
