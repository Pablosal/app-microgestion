import { ActionTypes } from "./Types";
export const añadirCliente = (nuevoCliente) => ({
  type: ActionTypes.AÑADIR_CLIENTE,
  payload: { nuevoCliente: nuevoCliente },
});
export const eliminarCliente = (clientId) => ({
  type: ActionTypes.ELIMINAR_CLIENTE,
  payload: clientId,
});
export const agregarOrden = (orden) => ({
  type: ActionTypes.AÑADIR_ORDEN,
  payload: orden,
});
export const modificarCliente = (fechas) => ({
  type: ActionTypes.EDITAR_CLIENTE,
  payload: fechas,
});
export const añadirOrden = (ordenCliente) => ({
  type: ActionTypes.AÑADIR_ORDEN,
  payload: ordenCliente,
});
export const eliminarOrden = (ordenClienteId) => ({
  type: ActionTypes.ELIMINAR_ORDEN,
  payload: ordenClienteId,
});
