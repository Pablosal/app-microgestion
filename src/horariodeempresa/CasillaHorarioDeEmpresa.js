import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const CasillaHorarioDeEmpresa = ({ cliente }) => {
  const [verOrden, setVerOrden] = useState(false);
  return (
    <div
      className="bg-warning  d-flex justify-content-center flex-column"
      colSpan="3"
    >
      <div className="w-100 d-flex align-items-center justify-content-center">
        <h4>{cliente.nombre}</h4>
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center flex-column">
        <button
          onClick={() => setVerOrden(!verOrden)}
          className="btn btn-danger"
        >
          Ver Orden
        </button>
        {verOrden && (
          <ul>
            {cliente.insumos.map((i) => (
              <li key={uuidv4()}>{i}</li>
            ))}
          </ul>
        )}
        <h4>Por Pagar: </h4>
      </div>
    </div>
  );
};

export default CasillaHorarioDeEmpresa;
