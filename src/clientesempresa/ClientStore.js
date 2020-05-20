import { createStore } from "redux";
import { combineReducers } from "redux";

import { EmpresaReducer } from "./EmpresaReducer";
import { ClientesReducer } from "./ClientesReducer";
const allReducers = combineReducers({ ClientesReducer, EmpresaReducer });
export const ClientDataStore = createStore(allReducers);
