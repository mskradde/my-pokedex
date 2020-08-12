import React from "react";
import "./App.css";
import ListItem from "./components/ListItem";
import List from "./components/List";
import ListIcon from "./components/ListIcon";

function App() {
  return (
    <div className="app">
      <header className="header">
        Pokedex <input className="header__input" placeholder="Search" />
      </header>
      <main className="colorful-border">
        <List>
          <ListItem href="#">
            <ListIcon></ListIcon>

            <div
              style={{
                flexGrow: 1,
              }}
            >
              Bisasam
            </div>
            <div>Icon</div>
          </ListItem>
        </List>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
