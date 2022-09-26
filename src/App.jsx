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
  const [page, setPage] = useState(1);

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
    setPage(page + 1);
  };

  const prevPokemons = () => {
    if (!pokemon.previous) return;
    setApiUrl(pokemon.previous);

    if(page !== 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      {loading && <Loadings />}
      <div className="flex-between">
        <Stack padding={2} spacing={2} direction="row">
          <Button color="success" variant="contained" onClick={prevPokemons}>
            Previous
          </Button>
          <Button color="secondary" variant="contained" onClick={nextPokemons}>
           Next
          </Button>
          <p className="page">
            Page {page}
          </p>
        </Stack>
      </div>
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
