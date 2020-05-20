import React, { useState } from "react";
const HorarioOrdenSimple = ({ cliente }) => {
  const [verOrden, setVerOden] = useState(false);
  const [pagado, setPagado] = useState(false);
  return (
    <div className="orden">
      <div className="container singular_orden p-2">
        <h5>{cliente.nombre}</h5>
        <button
          onClick={() => setVerOden(!verOrden)}
          className="btn btn-primary "
        >
          Ver Orden
        </button>
        {pagado ? (
          <span
            onClick={() => setPagado(!pagado)}
            className="badge badge-pill badge-success p-2"
          >
            PAGADO
          </span>
        ) : (
          <span
            onClick={() => setPagado(!pagado)}
            className="badge badge-pill badge-danger p-2 "
          >
            <strong>Por Pagar:</strong>
            <strong style={{ fontSize: "1.5em" }}> {cliente.precio}</strong>
          </span>
        )}
      </div>
      {verOrden && (
        <div className="plural_orden container">
          <ul className="list-group w-100">
            {cliente.insumos.map((i) => (
              <li className="list-group-item list-group-item-action" key={i}>
                {i}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HorarioOrdenSimple;
