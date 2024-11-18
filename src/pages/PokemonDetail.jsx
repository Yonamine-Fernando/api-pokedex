import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getPokemonDetails } from '../service/PokemonsApi';
import { ThemeContext } from '../context/theme-context';
import * as Styles from './styleDetail';
import { ThemeToggerButton } from '../componets/theme-togger-button/theme-togger-button';

function PokemonDetail() {
  const { theme } = useContext(ThemeContext)

  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await getPokemonDetails(id);
        const abilities = await Promise.all(
          response.data.abilities.map(async (item) => {
            const abilityDetails = await axios.get(item.ability.url);
            return {
              name: item.ability.name,
              description: abilityDetails.data.effect_entries?.[0]?.effect || "Habilidade",
            };
          })
        );
        setPokemon({
          name: response.data.name,
          image: response.data.sprites.other['official-artwork'].front_default,
          moves: response.data.moves.map((move) => move.move.name),
          abilities,
          types: response.data.types.map((type) => type.type.name),
        });
      } catch (error) {
        console.error("Erro ao buscar detalhes do Pokémon:", error);
      }
    };
    fetchPokemonDetails();
  }, [id]);

  if (!pokemon) return <div>Carregando...</div>;

  return (
    <div style={{
      color: theme.color, backgroundImage: `url("${theme.bgImage}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      width: '100%',
      minHeight: '100vh',
    }}>
      <Styles.CardContainer>
        <Styles.PokemonImage src={pokemon.image} alt={pokemon.name}></Styles.PokemonImage>
        <ThemeToggerButton/>
        <Styles.DetailesPokemon>
        <Styles.NomePokemon>{pokemon.name}</Styles.NomePokemon>
          <h3>tipo: {pokemon.types.join(', ')}</h3>
          <h3>Habilidades</h3>
          <Styles.AbilityList>
            {pokemon.abilities.map((ability, index) => (
              <li key={index}>
                <p><strong>{ability.name}:</strong>
                  {ability.description}</p>
              </li>
            ))}
          </Styles.AbilityList>
          <h3>Movimentos</h3>
          <Styles.MoveList>
            {pokemon.moves.map((move, index) => (
              <li key={index}>{move}</li>
            ))}
          </Styles.MoveList>
        </Styles.DetailesPokemon>
        <Link to="/">
          <Styles.Button>voltar para lista</Styles.Button>
        </Link>
      </Styles.CardContainer>
    </div >
  );
}

export default PokemonDetail;