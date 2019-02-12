import React from 'react'
import styled from 'styled-components'
import { Box } from '@chasemccoy/kit'

const Container = styled(Box)`
`

const Layout = ({ children }) => (
  <Container py={[16, 24, 32, 40]} px={[16, 24, 40, 48]}>
    {children}
  </Container>
)

export default Layout