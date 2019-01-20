import { createGlobalStyle } from 'styled-components'
import { media } from '@chasemccoy/kit'

const GlobalCSS = createGlobalStyle`
  body {
    font-family: ${p => p.theme.fonts.system};

    position: relative;
    padding-right: 40px;
    
    ${p => media(p).small`
      padding-right: 0;
      padding-top: 40px;
    `}

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 40px;

      background:
        repeating-linear-gradient(
          45deg,
          dodgerblue 0,
          dodgerblue 13%,
          transparent 13%,
          transparent 26%,
          tomato 26%,
          tomato 39%,
          transparent 39%,
          transparent 50%,
        ),
        white;

      background:
        repeating-linear-gradient(
          -45deg,
          transparent 0,
          transparent 25%,
          dodgerblue 0,
          dodgerblue 50%
        ),
        repeating-linear-gradient(
          45deg,
          transparent 0,
          transparent 25%,
          tomato 0,
          tomato 50%
        ),
        white;

      ${p => media(p).small`
        left: 0;
        bottom: unset;
        width: 100%;
        height: 40px;
      `}

      background-blend-mode: multiply;
      background-size: 40px 40px;
    }
  }
`

export default GlobalCSS