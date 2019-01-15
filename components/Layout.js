import React from 'react'
import styled from 'styled-components'
import { Box } from '@chasemccoy/kit'

const Container = styled(Box)`
`

const Layout = ({ children }) => (
  <Container p={[16, 24, 32, 40]}>
    {children}
  </Container>
)

export default Layout