import React from 'react'
import { Text, UnorderedList, Box, Heading, Grid } from '@chasemccoy/kit'
import { getWeather, getFeedbinEntries, getHyperlist } from '../utils/data'
import RSS from '../components/RSS'
import Link from '../components/Link'

const Index = props => (
  <React.Fragment>
    {/* <Text mb={40}>Weather: {props.temperature} {props.weatherSummary}</Text> */}

    <Grid>
      <Box width={[1, 1, 1/2, 1/3, 1/4]} pr={[0, 24, 24, 32]} mb={[40, 0]}>
        <Heading.h1 fontSize='18px' mb={16}>RSS</Heading.h1>
        <UnorderedList unstyled>
          {props.feedbin.entries
            .filter(entry => entry.feed_id !== 1383365)
            .map(entry => (
              <RSS.Entry title={entry.title} url={entry.url} mb={16} key={entry.id} />
            ))
          }
        </UnorderedList>
      </Box>

      <Box width={[1, 1, 1/2, 1/3, 1/4]} pl={[0, 24, 24, 32]}>
        <Heading.h1 fontSize='18px' mb={16}>Twitter</Heading.h1>
        <UnorderedList unstyled>
          {props.hyperlist
            .map((entry, i) => (
              <Box mb={16} key={i}>
                <RSS.Entry title={entry.title} url={entry.url} mb='4px' />
                <Text.p fontSize={14}>
                  <Link 
                    href={`http://twitter.com/${entry.twitter_username}/status/${entry.twitter_id}`} 
                    css={`
                      text-decoration: none; 
                      color: #999;
                    `}
                  >
                    source →
                  </Link>
                </Text.p>
              </Box>
            ))
          }
        </UnorderedList>
      </Box>
    </Grid>
  </React.Fragment>
)

Index.getInitialProps = async () => {
  // const weather = await getWeather()
  const feedbinEntries = await getFeedbinEntries()
  const hyperlist = await getHyperlist()

  return { 
    // temperature: weather.temperature,
    // weatherSummary: weather.summary,
    feedbin: {
      entries: feedbinEntries
    },
    hyperlist
  }
}

export default Index