//Informacion de autenticacion
//Informacion de Horario
//Informacion de Datos
import { ActionTypes } from "./Types";
export const SetearHorario = (horario) => ({
  type: ActionTypes.DEFINIR_HORARIO,
  payload: horario,
});
