import React from 'react'
import styled from 'styled-components'

const COLOR_1 = 'tomato'
const COLOR_2 = 'dodgerblue'
const COLOR_3 = '#7AB6F0'

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-blend-mode: multiply;
  background-size: 64px 64px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

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
      
    background-blend-mode: multiply;
    background-size: 104px 104px;
  }
`

const Plaid = props => (
  <Container />
)

export default Plaid