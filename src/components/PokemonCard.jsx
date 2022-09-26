import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect } from "react";
import Axios from "axios";
import "../styles/PokemonCard.scss";

const PokemonCard = ({ id, pokemon }) => {
  const { name } = pokemon;

  const [info, setInfo] = React.useState({});
  const infoAPI = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  useEffect(() => {
    Axios.get(infoAPI)
      .then(response => {
        setInfo(response.data);
      })
      .catch(error => {
        alert("Something went wrong!");
        console.error(error);
      });
  }, [infoAPI]);

  return (
    <div className="pokemon-container">
      <span data-aos="fade-up-right" data-aos-delay="300">
        <Card
          variant="outlined"
          className="hover"
          style={{ backgroundColor: "beige", transitionDuration: "0.5s" }}
        >
          <CardContent>
            <center>
              <img
                className="card-image"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                alt={`${name}`}
              />
            </center>
            <p className="small-text">#{id}</p>
            <p className="poke-font">{name}</p>
            <p className="text-center desc">
              weight: {info.weight}
              <br />
            </p>
            <p className="text-center desc-blue">
              height: {info.height}
              <br />
            </p>
          </CardContent>
        </Card>
      </span>
    </div>
  );
};

export default PokemonCard;
