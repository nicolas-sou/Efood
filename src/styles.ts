import { createGlobalStyle } from 'styled-components'

export const cores = {
  Branco: '#FFFFFF',
  Branco2: '#FFF8F2',
  Laranja: '#E66767',
  bege: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    }

    body {
      background-color: ${cores.Branco2};
      color: ${cores.Laranja};
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
`
