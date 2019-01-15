import React from 'react'
import styled from 'styled-components'
import { Box, Text } from '@chasemccoy/kit'
import Link from './Link'

const Entry = ({ title, url, ...props }) => (
  <Box as='li' {...props}>
    <Link href={url} css={`
      word-wrap: break-word; 
      text-decoration: none; 
      display: block;
    `}>
      {title}
      {title && <br />}
      <Text.span color='#999'>{url}</Text.span>
    </Link>
  </Box>
)

const RSS = { Entry: Entry }

export default RSS