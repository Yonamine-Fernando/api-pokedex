
import React, { useState, useEffect, useContext, } from 'react';
import axios from 'axios';
import PokemonCard from '../componets/pokemonCard/PokemonCard';
import SearchBar from '../componets/hearder/seachPokemon/SearchPokemon';
import { getPokemons } from '../service/PokemonsApi';
import { ThemeContext } from '../context/theme-context';
import Logo from '../componets/hearder/logo';
import * as Styles from './styleHome'
import { ThemeToggerButton } from '../componets/theme-togger-button/theme-togger-button';


function Home() {
  const { theme } = useContext(ThemeContext)

  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    loadPokemons();
  }, [offset]);

  const loadPokemons = async () => {
    try {
      const response = await getPokemons(offset);
      const newPokemons = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const details = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            image: details.data.sprites.front_default,
            id: details.data.id,
            types: details.data.types.map((typeInfo) => typeInfo.type.name)
          };
        })
      );

      const uniquePokemons = newPokemons.filter(
        (newPokemon) => !pokemonList.some((pokemon) => pokemon.id === newPokemon.id)
      );

      setPokemonList((prevList) => [...prevList, ...uniquePokemons.filter((newPokemon) => !prevList.some((pokemon) => pokemon.id === newPokemon.id)
      ),
      ]);;
    } catch (error) {
      console.error('Erro ao carregar Pokémons:', error);
    }
  };
  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + 10)
  }

  return (
    <div style={{ 
      backgroundImage: `url("${theme.bgImage}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      width:'100%',
      minHeight: '100vh'

    }}>
      <Styles.PageContainer>
        <Logo />
        <ThemeToggerButton/>
        <SearchBar />
        <Styles.PokemonGrid>
          {pokemonList.map((pokemons, index) => (
            <PokemonCard key={index} pokemon={pokemons} />
          ))}
        </Styles.PokemonGrid>
        <Styles.LoadMoreButton onClick={handleLoadMore}>Carregar mais</Styles.LoadMoreButton>
      </Styles.PageContainer>
    </div>
  );
}

export default Home;