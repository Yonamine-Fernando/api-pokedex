import styled from "styled-components";

import buttonImage from '../../../assets/button.png';
import cenario from '../../../assets/cenario.jpg'

export const SearchPokemon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const CardContainer = styled.div`
background-image: url(${cenario});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.2s;
  color: #ffffff;
  text-transform: capitalize;
  font-size: 2rem;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px; 
`

export const ImgPokemon = styled.img`
  width: 200px;
`
export const NomePokemon = styled.h2`
  text-transform: capitalize;
  color: #000000;
  background: #f5f5f9;
  border-radius: 0 0 10px 10px;
`

export const ButtonBall = styled.button`
  background: url(${buttonImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 50px;
  height:50px;
  border: none;
  margin-left: 5px
`
