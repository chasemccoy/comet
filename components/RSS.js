import React from 'react'
import styled from 'styled-components'
import { Box, Text } from '@chasemccoy/kit'

const Entry = ({ title, url, ...props }) => (
  <Box as='li' {...props}>
    <a href={url} css={`
      word-wrap: break-word; 
      text-decoration: none; 
      display: block;
    `}>
      {title}
      {title && <br />}
      <Text.span color='#999'>{url}</Text.span>
    </a>
  </Box>
)

const RSS = { Entry: Entry }

export default RSS