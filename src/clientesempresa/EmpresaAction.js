//Informacion de autenticacion
//Informacion de Horario
//Informacion de Datos
import { ActionTypes } from "./Types";
export const SetearHorario = (horario) => ({
  type: ActionTypes.DEFINIR_HORARIO,
  payload: horario,
});
export const logearse = (token) => ({
  type: ActionTypes.LOGEARSE,
  payload: token,
});
export const getLog = () => ({
  type: ActionTypes.GET_SESION,
});
export const deslogearse = () => ({
  type: ActionTypes.DESLOGEARSE,
});
export const insertData = (payload) => ({
  type: ActionTypes.INSERT_DATA,
  payload,
});
