import { createGlobalStyle } from 'styled-components'

const GlobalCSS = createGlobalStyle`
  body {
    font-family: ${p => p.theme.fonts.system};
  }
`

export default GlobalCSS