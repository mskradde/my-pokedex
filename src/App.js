import React from "react";
import "./App.css";
import Pokemons from "./pages/Pokemons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/pokemons">
            <Pokemons />
          </Route>
        </Switch>
        <footer>Footer</footer>
      </div>
    </Router>
  );
}

export default App;
