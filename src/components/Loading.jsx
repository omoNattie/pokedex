import React, {useState} from 'react';
import { useEffect } from 'react';

import "../styles/loading.scss"

const Loadings = () => {
    const facts = [
        "Bulbasaur is the first Pokemon in the Pokedex.",
        "Rhydon is the first Pokemon ever to be created.",
        "Pikachu is a Japanese onomatopoeia for squeaking and shimmering. ",
        "There are over 800 Pokemon species today and the number continues to grow.",
        "Slowbro is the only Pokemon that can devolve.",
        "The gender of a Pikachu can be determined by its tail. ",
        "Hitmonlee and Hitmonchan take its name from two iconic martial artists.",
        "Arcanine was originally meant to be a legendary pokemon.",
        "Poliwag is based on a real animal.",
        "Pokemon is short for Pocket Monsters.",
        "Lavender Town holds a dark secret.",
        "Pokemon Gold and Silver were supposed to be the last games. ",
        "Pokemon is the second best-selling franchise of all time. ",
        "Marill can change its gender when evolving.",
        "Zubat does not have any eyes. ",
    ]
    const [fact, setFact] = useState("Pikachu is a Japanese onomatopoeia for squeaking and shimmering.");

    useEffect(() => {
        setFact(facts[Math.floor(Math.random() * facts.length)]);
        const interval = setInterval(() => {
          setFact(facts[Math.floor(Math.random() * facts.length)]);
        }, 2000);
        return () => clearInterval(interval);
      }, []);

    return (
        <>
        <div className="abs-centered">
            <p className='abt-decor'>
                {fact}
            </p>
            <div className="lds-ellipsis cent"><div></div><div></div><div></div><div></div></div>
        </div>
        </>
    )
}

export default Loadings;