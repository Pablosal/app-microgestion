import { ActionTypes } from "./Types";
let initialState = {
  sesionIniciada: false,
  nombreEmpresa: "",
  horario: { start: 5, end: 15 },
};
export const EmpresaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DEFINIR_HORARIO:
      return {
        ...state,
        horario: { start: action.payload.start, end: action.payload.end },
      };
    case ActionTypes.LOGEARSE:
      let token = action.payload;
      if (!token) return;

      return {
        ...state,
        sesionIniciada: true,
      };
    case ActionTypes.DESLOGEARSE:
      return {
        ...state,
        sesionIniciada: false,
      };
    case ActionTypes.INSERT_DATA:
      return {
        ...state,
        nombreEmpresa: action.payload.nombre,
        imagenEmpresa: action.payload.image,
      };
    case ActionTypes.GET_SESION:
      console.log(state.sesionIniciada);
      console.log(state.nombreEmpresa);
      console.log(state);
      return state;
    default:
      return state;
  }
};
