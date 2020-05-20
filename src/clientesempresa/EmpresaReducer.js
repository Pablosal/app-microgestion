import { ActionTypes } from "./Types";
let initialState = {
  sesionIniciada: false,
  nombreEmpresa: "",
  horario: { start: 5, end: 15 },
  instrumentaria: [
    { nombre: "Coca-Cola", id: 12, precio: 1550, enCanasta: false },
    { nombre: "Sprite", id: 13, precio: 1550, enCanasta: false },
    { nombre: "Pepsi", id: 121, precio: 1550, enCanasta: false },
    { nombre: "Cereal Sin gluten", id: 128, precio: 2390, enCanasta: false },
    {
      nombre: "Galletas de maiz horneadas",
      id: 123,
      precio: 1649,
      enCanasta: false,
    },
  ],
};
export const EmpresaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DEFINIR_HORARIO:
      return {
        ...state,
        horario: { start: action.payload.start, end: action.payload.end },
      };
    default:
      return state;
  }
};
