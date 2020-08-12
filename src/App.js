import React from "react";
import "./App.css";
import ListItem from "./components/ListItem";
import List from "./components/List";
import ListIcon from "./components/ListItemIcon";
import ListItemText from "./components/ListItemText";

function App() {
  return (
    <div className="app">
      <header className="header">
        Pokedex <input className="header__input" placeholder="Search" />
      </header>
      <main className="colorful-border">
        <List>
          <ListItem href="Bulbasaur">
            <ListIcon
              src="https://img.pokemondb.net/artwork/large/bulbasaur.jpg"
              alt="Picture of Bulbasaur"
            />

            <ListItemText primary="Bulbasaur" secondary="001" />

            <div>Icon</div>
          </ListItem>
          <ListItem href="Ivysaur">
            <ListIcon
              src="https://img.pokemondb.net/artwork/large/ivysaur.jpg"
              alt="Picture of Ivysaur"
            />

            <ListItemText primary="Ivysaur" secondary="00" />

            <div>Icon</div>
          </ListItem>
        </List>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
