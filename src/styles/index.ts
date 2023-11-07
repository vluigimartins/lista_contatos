import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-image: url('https://cdn.pixabay.com/photo/2018/09/24/10/19/system-3699542_1280.jpg');
    background-position: center;
    background-size: cover;
  }
`

export default EstiloGlobal
