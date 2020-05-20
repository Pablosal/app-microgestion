import React from "react";
import "./App.css";
import HorarioOrden from "./horarioordenes/HorarioOrden";
import Clientes from "./clientesempresa/Clientes";
import Orden from "./formsempresa/Orden";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";

import { useSelector } from "react-redux";
import Landing from "./loginEmpresa/Landing";
function App() {
  let clientela = useSelector((state) => state.ClientesReducer);

  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Landing />
          {/* <Orden clientes={clientela.clientes} /> */}
        </Route>
        <Route exact path="/ordenes">
          <Orden clientes={clientela.clientes} />
        </Route>
        <Route exact path="/horarioOrden">
          <HorarioOrden />
        </Route>

        <Route exact path="/clientes">
          <Clientes clientes={clientela.clientes} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
