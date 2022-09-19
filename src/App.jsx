import { useEffect, useState } from "react";
import Axios from "axios";
import PageNav from "./components/PageNavigation";
import PokemonCard from "./components/PokemonCard";
import "./styles/main.scss";

const App = () => {
  const [pokemon, setPokemon] = useState({});
  const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=400";

  useEffect(() => {
    Axios.get(apiUrl)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(error => {
        alert("Something went wrong!");
        console.error(error);
      });
  }, []);

  return (
    <>
      <PageNav />
      <h1>Pokemons:</h1>
      <div className="pokemons-container">
        {pokemon.results?.map((pokemon, index) => (
          <PokemonCard key={index} index={index} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};

export default App;
