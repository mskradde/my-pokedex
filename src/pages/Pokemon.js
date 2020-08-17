import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchPokemon } from "../api/PokemonAPI";
import LoadingScreen from "../components/LoadingScreen";

function Pokemon() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let history = useHistory();

  function handleclick() {
    history.goBack("/pokemons");
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const fetchedPokemon = await fetchPokemon(name);
        setPokemon(fetchedPokemon);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    }
    fetchData();
  }, [name]);

  if (error) {
    return <div>Error!!!</div>;
  }
  if (loading || !pokemon) {
    return <LoadingScreen />;
  }
  return (
    <div>
      <div>ID: {pokemon.id}</div>
      <div>Name: {pokemon.name}</div>

      <img src={pokemon.imgSrc} alt={pokemon.name} />
      <button type="button" onClick={handleclick}>
        Go Home
      </button>
    </div>
  );
}

export default Pokemon;
