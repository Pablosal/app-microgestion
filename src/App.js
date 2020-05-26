import React from "react";
import "./App.css";
import HorarioOrden from "./horarioordenes/HorarioOrden";
import Clientes from "./clientesempresa/Clientes";
import Orden from "./formsempresa/Orden";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Landing from "./loginEmpresa/Landing";
import PrivateRoute from "./utils/PrivateRoute";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <PrivateRoute component={Orden} exact path="/ordenes" />
        <PrivateRoute component={HorarioOrden} exact path="/horarioOrden" />

        <PrivateRoute
          component={Clientes}
          exact
          path="/clientes"
        ></PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
