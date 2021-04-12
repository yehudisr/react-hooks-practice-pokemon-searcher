import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const API = "http://localhost:3001/pokemon"

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([])
  const [search, setSearch] = useState("")

    useEffect(()=>{
       fetch(API)
       .then(resp => resp.json())
       .then(data => setPokemonList(data))
    },
    [])

    function handleSearch(event){
      setSearch(event.target.value)
    }
    function handleAddPokemon(newpokemon){
      setPokemonList([...pokemonList, newpokemon])
    }

    const filteredList = pokemonList
    .filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search value={search} onSearchChange={handleSearch} />
      <br />
      <PokemonCollection pokemonList={filteredList} />
    </Container>
  );
}

export default PokemonPage;
