import { useEffect, useState } from "react";
import Axios from "axios";
import AOS from 'aos';

import 'aos/dist/aos.css';
import Loadings from "./components/Loading";
import PokemonCard from "./components/PokemonCard";

import "./styles/main.scss";

AOS.init();

const App = () => {
  const [pokemon, setPokemon] = useState({});
  const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=890";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(apiUrl)
      .then(response => {
        setPokemon(response.data);

        setLoading(false);
      })
      .catch(error => {
        alert("Something went wrong!");
        console.error(error);
      });

  }, []);

  return (
    <>
      {loading && <Loadings />}
      <div className="pokemon-container">
        {pokemon.results?.map((pokemon, index) => (
          <PokemonCard key={index} index={index} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};

export default App;
