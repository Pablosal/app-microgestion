import React, { useState } from "react";
import OrdenFormClienteNuevo from "./OrdenFormClienteNuevo";
import OrdenFormClienteViejo from "./OrdenFormClienteViejo";
const Orden = (props) => {
  const [cliente, setCliente] = useState(true);
  return (
    <div className="bg-dark p-3" style={{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center" ,alignItems:"center"}}>
      <h2>Ingresa tu orden</h2>
      <button onClick={() => setCliente(!cliente)} className="btn btn-info " >
        {cliente ? `Cliente Viejo` : "Cliente Nuevo"}
      </button>
      {cliente ? (
        <OrdenFormClienteNuevo />
      ) : (
        <OrdenFormClienteViejo clientes={props.clientes} />
      )}
    </div>
  );
};

export default Orden;
