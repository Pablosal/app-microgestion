import { ActionTypes } from "./Types";
let initialState = {
  sesionIniciada: false,
  nombreEmpresa: "",
  horario: { start: 5, end: 15 },
};
export const EmpresaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGEARSE:
      let token = action.payload;
      if (!token) return;
      localStorage.setItem("token", token);

      return {
        ...state,
        sesionIniciada: true,
      };

    case ActionTypes.INSERT_DATA:
      return {
        ...state,
        nombreEmpresa: action.payload.nombre,
        horario: {
          start: parseInt(action.payload.start),
          end: parseInt(action.payload.end),
        },
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
