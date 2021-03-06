import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar } from "../components";
import { Movies } from "../pages";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/movies/list" exact component={Movies} />
      </Switch>
    </Router>
  );
}

export default App;
