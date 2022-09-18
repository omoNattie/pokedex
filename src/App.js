import React, {useEffect, useState} from 'react';
import Axios from "axios";

import "./styles/index.scss"
import "./styles/main.sass"
import "./styles/PageNavigation.sass"
import PageNav from "./components/PageNavigation";

function App() {
    const [pokemon, setPokemon] = useState({});
    const API = "https://pokeapi.co/api/v2/pokemon?limit=400";

    const Error = () => {
        return (
            <p>Something went wrong...</p>
        )
    }

    useEffect(() => {
        Axios.get(API)
            .then(({ data }) => {
                setPokemon(data);
            })
            .catch(({ error }) => {
                Error();
                console.log(error);
            })
    }, [])

    return (
        <>
            <PageNav />

            <div className="flex">
                {
                    pokemon.results?.map((pokemon, index) => (
                        <div key={index}>
                            <img className="card-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name}/>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default App;
