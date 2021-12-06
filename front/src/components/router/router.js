import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../login/login";
import Home from "../pages/home";
import PrivateRouter from "../auth/privaterouter";
import Retos from "../retos/index";
import RetoScreen from "../pages/reto";
import About from "../pages/about";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/"]} component={Home} />
        <Route exact path={["/login"]} component={Login} />
        <Route exact path={["/about"]} component={About} />
        <Route exact path={["/reto/:idReto"]} component={RetoScreen} />
        <PrivateRouter exact path={["/retos"]} component={Retos} />
        <Route
          path={"*"}
          component={() => (
            <h1 style={{ marginTop: 300 }}>
              404
              <br />
              Página no encontrada
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
}
