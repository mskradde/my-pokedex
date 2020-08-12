import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        Pokedex <input placeholder="Search" />{" "}
      </header>
      <main className="pokeList">
        <list>Dies ist eine Liste</list>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
