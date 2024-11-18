import axios from "axios";

export const getPokemons = async (offset = 0) => {
    try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
    return response;
} catch (error) {
    console.error("Erro ao carregar o Pokémon:", error);
      throw error;
}

}

export const searchPokemon = async (pokemon) => { 
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await axios.get(url);
        return response.data; 
    } catch (error) {
        console.error('Erro ao buscar Pokémon:', error);
    }
};

export async function getPokemonDetails(id) {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return response;
    } catch (error) {
      console.error("Erro ao buscar detalhes do Pokémon:", error);
      throw error;
    }
  }

