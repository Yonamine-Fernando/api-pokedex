import React, { useState } from "react";
import { searchPokemon } from "../../../service/PokemonsApi";
import { Link } from "react-router-dom";
import * as StyledSearch from "./style";



function PokemonSearch() {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonName, setPokemonName] = useState("");
  const [error, setError] = useState(null)

  const handleSearch = async () => {

    if (!pokemonName.trim()) {
      alert("Digite o Nome ou Id do Pokémon")
    }
    try {
      const data = await searchPokemon(pokemonName.toLowerCase());
      if (data) {
        setPokemonData(data);
        setError(null);
      } else {
        alert("Pokémon não encontrado")
      }
    } catch (error) {
      setError("Erro ao buscar Pokémon")
      setPokemonData(null)
    }
  };
  const handleyKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch()
    }
  };


  return (
    <div>
      <StyledSearch.SearchPokemon>
        <input
          type="text"
          value={pokemonName}
          onChange={(element) => setPokemonName(element.target.value)}
          onKeyDown={handleyKeyPress}
          placeholder="Busque o Pokémon"
        />
        <StyledSearch.ButtonBall onClick={handleSearch} />
      </StyledSearch.SearchPokemon>
      {pokemonData && pokemonData.sprites && pokemonData.sprites.other && (
        <Link to={`/pokemon/${pokemonData.id}`}>
          <StyledSearch.CardContainer>
            <StyledSearch.ImgPokemon src={pokemonData.sprites.other[`official-artwork`].front_default} alt={pokemonData.name} />
            <StyledSearch.NomePokemon>{pokemonData.name}</StyledSearch.NomePokemon>
          </StyledSearch.CardContainer>
        </Link>
      )}
    </div>
  );
}

export default PokemonSearch;


  