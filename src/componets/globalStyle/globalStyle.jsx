import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html { 
    font-size: 62.5%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* body {
    position: relative;
    font-family: Arial, sans-serif;
  
  }

  body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    opacity: 0.5; 
    z-index: -1;
    transition: background-size 0.3s ease;
  } */

ul {
    list-style: none;
}

a { 
    text-decoration: none;
}

`