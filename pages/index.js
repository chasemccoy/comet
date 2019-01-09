import React from 'react'
import { Text, UnorderedList, Box } from '@chasemccoy/kit'
import { getWeather, getFeedbinEntries } from '../utils/data'
import RSS from '../components/RSS'

const Index = props => (
  <React.Fragment>
    <Text mb={40}>Weather: {props.temperature} {props.weatherSummary}</Text>

    <Box width={[1, 1, 1/2, 1/3, 1/4]}>
      <UnorderedList width={1/16}>
        {props.feedbin.entries
          .filter(entry => entry.feed_id !== 1383365)
          .map(entry => (
            <RSS.Entry title={entry.title} url={entry.url} key={entry.id} />
          ))
        }
      </UnorderedList>
    </Box>
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