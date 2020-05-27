import React from "react";
import OrdenFormClienteViejo from "./OrdenFormClienteViejo";
import { useSelector } from "react-redux";
import OredenesDeClientes from "../clientesempresa/OredenesDeClientes";

const Orden = () => {
  let clientela = useSelector((state) => state.ClientesReducer);
  return (
    <div
      className=" p-3 "
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#DCEFF5",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div className="m-2">
          <h3>Tus Ordenes Pendientes</h3>
          <OredenesDeClientes ordenes={clientela.ordenes} />
        </div>
        <div className="m-2">
          <h2>Ingresa Una Nueva Orden</h2>
          <OrdenFormClienteViejo clientes={clientela} />
        </div>
      </div>
    </div>
  );
};

export default Orden;
