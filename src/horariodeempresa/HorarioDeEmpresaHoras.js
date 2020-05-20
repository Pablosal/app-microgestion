import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import CasillaHorarioDeEmpresa from "./CasillaHorarioDeEmpresa";
const HorarioDeEMpresaHoras = (props) => {
  const horario = useSelector((state) => state.EmpresaReducer);

  const clientela = props.clientes;

  const recuperarHorario = (idx) => {
    if (crearHorario()[idx + 1] === undefined) {
      return;
    } else {
      return crearHorario()[idx + 1];
    }
  };
  const crearHorario = () => {
    var hours = [];
    for (var i = horario.horario.start; i <= horario.horario.end; i++) {
      hours.push((i < 10 ? "0" : "") + i + ":00");
    }

    return hours;
  };

  const calibrarHorario = (cliente, h, idx) => {
    return cliente.map((cliente) => {
      if (
        cliente.horaEntrega >= h &&
        cliente.horaEntrega <= recuperarHorario(idx)
      )
        return <CasillaHorarioDeEmpresa key={uuidv4()} cliente={cliente} />;
    });
  };
  return (
    <div className="container d-flex align-items-center justify-content-center p-0">
      <table
        className="table table-responsive table-bordered table-hover container p-0"
        style={{ display: "inline-table" }}
      >
        <thead className="thead-dark">
          <tr>
            <th scope="col">Horas de Trabajo</th>
            <th scope="col">Encargos</th>
          </tr>
        </thead>
        <tbody>
          {crearHorario().map((h, idx) => (
            <tr key={parseInt(h)}>
              <td>
                {h} - {recuperarHorario(idx)}
              </td>
              <td>{calibrarHorario(clientela, h, idx)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HorarioDeEMpresaHoras;
