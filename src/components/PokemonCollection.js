import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonList}) {

 const pokemonCollection = pokemonList.map((pokemon)=> <PokemonCard pokemon={pokemon}/>)
 
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonCollection}
    </Card.Group>
  );
}

export default PokemonCollection;
