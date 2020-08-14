import React, { useEffect } from "react";
import "./App.css";
import ListItem from "./components/ListItem";
import List from "./components/List";
import ListItemIcon from "./components/ListItemIcon";
import ListItemText from "./components/ListItemText";
import { fetchPokemons } from "./components/PokemonAPI";
function waitFor(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
function App() {
  const [loading, setLoading] = React.useState(true);

  const [pokemons, setPokemons] = React.useState(null);
  useEffect(() => {
    async function fetchData() {
      await waitFor(2000);
      const newPokemons = await fetchPokemons();
      setPokemons(newPokemons);
      setLoading(!loading);
    }
    fetchData();
  }, []);
  if (loading) {
    return <h2>Loading</h2>;
  } else {
    return (
      <div className="app">
        <header className="header">
          Pokedex <input className="header__input" placeholder="Search" />
        </header>
        <main className="colorful-border">
          <List>
            {pokemons?.map((pokemon) => (
              <ListItem key={pokemon.id} href={pokemon.link}>
                <ListItemIcon
                  src={pokemon.imgSrc}
                  alt={`Picture of ${pokemon.name}`}
                />
                <ListItemText
                  primary={pokemon.name}
                  secondary={`# ${pokemon.id}`}
                />
              </ListItem>
            ))}
          </List>
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
