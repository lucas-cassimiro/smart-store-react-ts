import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  width: 100%;
  -webkit-font-smoothing: antialiased;
}

ul, li {
  list-style: none;
}

ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
}

.active{
  border-bottom: 2px solid #fff;
  font-weight: 700;
}
`
