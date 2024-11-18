import styled from "styled-components";

export const  PageContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 25px;
      justify-content: center;
      `;

export const  PokemonGrid = styled.div`
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 20px;
      width: 100%;
      max-width: 1200px;
      margin-top: 20px;

      @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr); 
  }

      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr); 
  }
      `;

export const  LoadMoreButton = styled.button`
      padding: 10px 20px;
      margin-top: 20px;
      font-size: 1.6rem;
      cursor: pointer;
      background-color: #ffcb05;
      border: none;
      border-radius: 5px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
      transition: background-color 0.3s;

      &:hover {
        background - color: #f4b400;
  }
      `