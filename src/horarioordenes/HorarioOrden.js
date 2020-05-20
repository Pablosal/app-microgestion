import React, { useState } from "react";
import "./HorarioOrden.css";
import { useSelector } from "react-redux";
import { sameDate } from "./currentDate.js";
import HorarioFechasOrden from "./HorarioFechasOrden";
import HorarioDeEMpresaHoras from "../horariodeempresa/HorarioDeEmpresaHoras";

const HorarioOrden = () => {
  let data = useSelector((state) => state.ClientesReducer);
  const [mismoDia, setMismoDia] = useState(sameDate.date);

  const setearFecha = (fecha) => {
    setMismoDia(fecha);
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <HorarioFechasOrden hoy={mismoDia} setearFecha={setearFecha} />
      <HorarioDeEMpresaHoras
        clientes={data.clientes.filter(
          (c) => c.fechaEntrega === mismoDia.split("-").reverse().join("-")
        )}
      />
    </div>
  );
};

export default HorarioOrden;
