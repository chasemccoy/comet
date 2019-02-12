import { createGlobalStyle } from 'styled-components'
import { media } from '@chasemccoy/kit'

const TRIM_WIDTH = '80px'
const COLOR_1 = 'tomato'
const COLOR_2 = 'dodgerblue'
const COLOR_3 = '#7AB6F0'

const GlobalCSS = createGlobalStyle`
  body {
    font-family: ${p => p.theme.fonts.system};
    position: relative;
    padding-left: ${TRIM_WIDTH};
    
    ${p => media(p).small`
      padding-left: 0;
      padding-top: ${TRIM_WIDTH};
    `}

    &:after {
      content: "";
      position: absolute;
      top: 40px;
      left: 0;
      width: ${TRIM_WIDTH};
      height: ${TRIM_WIDTH};

      background: url("/static/logo.png") white;
      background-repeat: no-repeat;
      background-size: 56px 56px;
      background-position: center;

      ${p => media(p).small`
        top: 0;
        left: 16px;
      `}
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: ${TRIM_WIDTH};

      background:
        repeating-linear-gradient(
          -45deg,
          transparent 0,
          transparent 25%,
          ${COLOR_2} 0,
          ${COLOR_2} 50%
        ),
        linear-gradient(
          -45deg,
          transparent 10%, 
          ${COLOR_3} 10%, 
          ${COLOR_3} 15%, 
          transparent 15%
        ),
        linear-gradient(
          -45deg,
          transparent 60%, 
          ${COLOR_3} 60%, 
          ${COLOR_3} 65%, 
          transparent 65%
        ),
        repeating-linear-gradient(
          45deg,
          transparent 0,
          transparent 25%,
          ${COLOR_1} 0,
          ${COLOR_1} 50%
        ),
        white;

      ${p => media(p).small`
        right: 0;
        bottom: unset;
        width: 100%;
        height: ${TRIM_WIDTH};
      `}

      background-blend-mode: multiply;
      background-size: ${TRIM_WIDTH} ${TRIM_WIDTH};
    }
  }
`

export default GlobalCSS