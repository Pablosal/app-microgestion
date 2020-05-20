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
      insumos: ["perro", "caca", "gatos"],
      completado: true,
      ordenEnProceso: true,
      precio: 150.0,
      cantidadDeOrdenes: 0,
      fechaEntrega: "2020-05-27",
      horaEntrega: "12:30",
      destacado: false,
    },
    {
      image: placeholder,
      nombre: "Eliaz Figeroa",
      id: 2,
      direccion: "El gatornio 960",
      telefono: 874859635,
      insumos: ["perro", "caca", "gatos"],
      completado: false,
      precio: 150.0,
      cantidadDeOrdenes: 0,
      destacado: false,
      fechaEntrega: "2020-05-27",
      ordenEnProceso: true,
      horaEntrega: "12:30",
    },
    {
      image: placeholder,
      nombre: "Benedicto 15",
      id: 3,
      direccion: "kalian 890",
      telefono: 745823964,
      insumos: ["perro", "caca", "gatos"],
      completado: false,
      precio: 150.0,
      cantidadDeOrdenes: 0,
      destacado: false,
      fechaEntrega: "27-05-2020",
      ordenEnProceso: true,
      horaEntrega: "09:30",
    },
    {
      image: placeholder,
      nombre: "Pulpo rodrigez",
      id: 4,
      direccion: "zenedias 890",
      telefono: 725934813,
      insumos: ["perro", "caca", "gatos"],
      completado: false,
      precio: 150.0,
      cantidadDeOrdenes: 0,
      ordenEnProceso: false,
      destacado: false,
      fechaEntrega: "15-05-2020",
      horaEntrega: "15:30",
    },
    {
      image: placeholder,
      nombre: "Huargantia 50",
      id: 5,
      direccion: "Yaiman 72",
      telefono: 8746932158,
      insumos: ["perro", "caca", "gatos"],
      completado: false,
      precio: 150.0,
      cantidadDeOrdenes: 0,
      destacado: false,
      ordenEnProceso: false,
      fechaEntrega: "18-05-2020",
      horaEntrega: "16:30",
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
