import styled from 'styled-components';
import Cenario from '../../src/assets/cenario.jpg'



export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size:1.5rem;
  text-transform: capitalize;
`

export const NomePokemon = styled.h1`
  text-transform: uppercase;
  margin-bottom: 15px;
  font-size: 2.5rem;
`

export const PokemonImage = styled.img`
  background-image: url(${Cenario});
  background-size: cover;
  width: 400px;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  margin-bottom: 15px;
  border-radius:10px;
`;

export const DetailesPokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffffb1;
  border-radius:5px;
  gap: 10px;
  width: 65%;
`
export const AbilityList = styled.ul`
  overflow-y: auto; 
  margin: 10px;
  padding: 20px;
  list-style-type: none;
  font-size: 1.6rem;
  border: 2px solid #000000;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const MoveList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  justify-items: center; 
  max-height: 75px;
  overflow-y: auto; 
  margin: 10px;
  min-width: 70%;
  list-style-type: none;
  border: 2px solid #000000;
  border-radius: 5px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

