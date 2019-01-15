import React from 'react'
import { Text, UnorderedList, Box, Heading} from '@chasemccoy/kit'
import { getWeather, getFeedbinEntries, getHyperlist } from '../utils/data'
import RSS from '../components/RSS'
import Link from '../components/Link'

const Index = props => (
  <React.Fragment>
    {/* <Text mb={40}>Weather: {props.temperature} {props.weatherSummary}</Text> */}

    <Box display='flex' flexWrap='wrap'>
      <Box width={[1, 1, 1/2, 1/3, 1/4]}>
        <Heading.h1 fontSize='18px' mb={16}>Feedbin</Heading.h1>
        <UnorderedList width={1/16}>
          {props.feedbin.entries
            .filter(entry => entry.feed_id !== 1383365)
            .map(entry => (
              <RSS.Entry title={entry.title} url={entry.url} mb={16} key={entry.id} />
            ))
          }
        </UnorderedList>
      </Box>

      <Box width={[1, 1, 1/2, 1/3, 1/4]}>
        <Heading.h1 fontSize='18px' mb={16}>Hyperlist</Heading.h1>
        <UnorderedList width={1/16}>
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
    </Box>
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