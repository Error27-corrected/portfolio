import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap');

  :root {
    --color-primary: #6B4226;
    --color-secondary: #A68A64;
    --color-accent: #DDB892;
    --color-background: #F5EFE6;
    --color-text: #6B4226;
    --color-text-light: #A68A64;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--color-background);
    color: var(--color-text);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    color: var(--color-primary);
  }

  a {
    text-decoration: none;
    color: var(--color-primary);
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-secondary);
    }
  }

  button {
    font-family: 'Poppins', sans-serif;
  }
`; 