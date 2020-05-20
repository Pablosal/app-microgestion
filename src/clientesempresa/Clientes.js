import React from "react";
import ClientesEmpresa from "./ClientesEmpresa";
const Clientes = (props) => {
  console.log(props.clientes);
  if (props.clientes.length <= 0) return <h1>No existen Clientes</h1>;
  return (
    <div className="container">
      <div className="container bg-info ">
        <h1>Clientes</h1>
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
          <ClientesEmpresa cliente={props.clientes[0]} />
          {/* {props.clientes.map((c) => (
            <ClientesEmpresa key={c.id} cliente={c} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Clientes;
