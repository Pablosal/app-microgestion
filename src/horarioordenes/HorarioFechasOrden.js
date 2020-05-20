import React from "react";
import { sameDate } from "./currentDate.js";

const HorarioFechasOrden = (props) => {
  const getButtonStylesOfDay = (d) => {
    if (d === props.hoy) {
      return "btn-success";
    } else {
      return "btn-primary";
    }
  };
  return (
    <div className="container p-3 bg-dark dias-de-ordenes ">
      {sameDate.nextWeek.map((d) => (
        <button
          onClick={() => props.setearFecha(d)}
          key={d}
          className={`btn ${getButtonStylesOfDay(d)}  p-2 m-1`}
        >
          {d}
        </button>
      ))}
    </div>
  );
};

export default HorarioFechasOrden;
