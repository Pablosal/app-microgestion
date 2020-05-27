import React from "react";
const CasillaHorarioDeEmpresa = ({ cliente }) => {
  return (
    <div
      colSpan="3"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <div className="w-100 ">
        <h4>{cliente.nombre}</h4>
      </div>
      <div className="w-100">
        <h4>
          Por Pagar: <strong>${cliente.precio}</strong>{" "}
        </h4>
      </div>
    </div>
  );
};

export default CasillaHorarioDeEmpresa;
