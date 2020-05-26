import React from "react";
import ClientesEmpresa from "./ClientesEmpresa";
import { useSelector } from "react-redux";
import OredenesDeClientes from "./OredenesDeClientes";
import OrdenFormClienteNuevo from "../formsempresa/OrdenFormClienteNuevo";
const Clientes = () => {
  let clientela = useSelector((state) => state.ClientesReducer);

  if (clientela.clientes.length <= 0) return <h1>No existen Clientes</h1>;
  return (
    <div
      className=""
      style={{
        backgroundColor: "#dceff5",
        height: "100vh",
        width: "100%",
        display: "flex",
      }}
    >
      <div className="container ">
        <h1 style={{ textAlign: "center" }}>Mis Clientes</h1>
        <div
          className="container center-column"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* <ClientesEmpresa cliente={clientela.clientes[0]} /> */}
          {clientela.clientes.map((c) => (
            <ClientesEmpresa key={c.id} cliente={c} />
          ))}
        </div>
      </div>
      <OrdenFormClienteNuevo />
    </div>
  );
};

export default Clientes;
