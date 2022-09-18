import "../styles/PokemonCard.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const PokemonCard = ({ index, pokemon }) => {
  const { name } = pokemon;
  return (
    <div className="pokemon-container">
      <Card variant="outlined">
        <CardContent>
          <p>
            {index + 1}-{name}
          </p>
          <img
            className="card-image"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`}
            alt={`${name}`}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default PokemonCard;
