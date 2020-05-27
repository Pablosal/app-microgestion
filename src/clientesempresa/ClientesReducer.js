import { ActionTypes } from "./Types";
import placeholder from "../Images/plqd3hole34.jpg";
let initialState = {
  clientes: [
    {
      image: placeholder,
      nombre: "Dominico Eliaz",
      id: 1,
      direccion: "pinagua 890",
      telefono: 998074590,

      destacado: false,
    },
    {
      image: placeholder,
      nombre: "Eliaz Figeroa",
      id: 2,
      direccion: "El gatornio 960",
      telefono: 874859635,
    },
  ],
  ordenes: [
    {
      nombre: "Dominico Eliaz",
      precio: 150.0,
      cantidadDeOrdenes: 0,
      ordenEnProceso: true,
      fechaEntrega: "2020-05-25",
      horaEntrega: "12:30",

      completado: true,
    },
    {
      nombre: "Eliaz Figeroa",

      completado: false,
      precio: 150.0,
      cantidadDeOrdenes: 0,
      destacado: false,
      fechaEntrega: "2020-05-25",
      ordenEnProceso: true,
      horaEntrega: "12:30",
    },
  ],
};
export const ClientesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AÑADIR_CLIENTE:
      let c = action.payload.nuevoCliente;
      console.log(c);
      let clientePreexistente = state.clientes.find(
        (cliente) => cliente.nombre === c.nombre
      );

      if (clientePreexistente) alert("ya esta");

      return {
        ...state,
        clientes: [...initialState.clientes, c],
      };
    case ActionTypes.EDITAR_CLIENTE:
      const dataDate = action.payload;
      let clienteModificable = state.clientes.map((content) => {
        if (content.id === dataDate.id) {
          return {
            ...content,
            direccion: dataDate.direccion,
            telefono: dataDate.telefono,
          };
        } else {
          return content;
        }
      });

      return { ...state, clientes: clienteModificable };
    case ActionTypes.ELIMINAR_CLIENTE:
      const idDeCliente = action.payload;
      let nuevaClientela = state.clientes.filter((c) => c.id !== idDeCliente);
      return { ...state, clientes: nuevaClientela };
    case ActionTypes.AÑADIR_ORDEN:
      console.log(action.payload);
      console.log(state.ordenes);
      return {
        ...state,
        ordenes: [...state.ordenes, action.payload],
      };

    case ActionTypes.ELIMINAR_ORDEN:
      return {
        ...state,
        ordenes: state.Ordenes.filter((o) => o.id !== action.payload),
      };

    default:
      return state;
  }
};
