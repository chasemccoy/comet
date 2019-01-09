import React from 'react'
import { Text, UnorderedList, Box } from '@chasemccoy/kit'
import { getWeather, getFeedbinEntries } from '../utils/data'

const Index = props => (
  <React.Fragment>
    <Text mb={40}>Weather: {props.temperature} {props.weatherSummary}</Text>

    <UnorderedList>
      {props.feedbin.entries
        .filter(entry => entry.feed_id !== 1383365)
        .map(entry => (
          <Box as='li' mb='12px' key={entry.id}>
            {entry.title && <a href={entry.url}>{entry.title}</a>}
            {entry.title && <br />}
            <a href={entry.url} css={`word-wrap: break-word; color: #777;`}>
              <Text.span>{entry.url}</Text.span>
            </a>
          </Box>
        ))
      }
    </UnorderedList>
  </React.Fragment>
)

Index.getInitialProps = async () => {
  const weather = await getWeather()
  const feedbinEntries = await getFeedbinEntries()

  return { 
    temperature: weather.temperature,
    weatherSummary: weather.summary,
    feedbin: {
      entries: feedbinEntries
    }
  }
}

export default Index