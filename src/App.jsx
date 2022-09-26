import { useEffect, useState } from "react";
import Axios from "axios";
import AOS from "aos";
import Loadings from "./components/Loading";
import PokemonCard from "./components/PokemonCard";
import { Button, Stack } from "@mui/material";
import "aos/dist/aos.css";
import "./styles/main.scss";

AOS.init();

const App = () => {
  const [pokemon, setPokemon] = useState({});
  const [apiUrl, setApiUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(apiUrl)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(error => {
        alert("Something went wrong!");
        console.error(error);
      })
      .then(() => {
        setLoading(false);
      });
  }, [apiUrl]);

  const nextPokemons = () => {
    if (!pokemon.next) return;
    setApiUrl(pokemon.next);
  };

  const prevPokemons = () => {
    if (!pokemon.previous) return;
    setApiUrl(pokemon.previous);
  };

  return (
    <>
      {loading && <Loadings />}
      <h1 className="poke-font" style={{ paddingLeft: "15px" }}>
        Pokedex
      </h1>
      <Stack padding={4} spacing={2} direction="row">
        <Button color="success" variant="contained" onClick={prevPokemons}>
          Previous
        </Button>
        <Button color="secondary" variant="contained" onClick={nextPokemons}>
          Next
        </Button>
      </Stack>
      <div className="pokemon-container">
        {pokemon.results?.map(pokemon => {
          const pokemonId = pokemon.url.split("/")[6];
          return (
            <PokemonCard key={pokemonId} id={pokemonId} pokemon={pokemon} />
          );
        })}
      </div>
    </>
  );
};

export default App;
