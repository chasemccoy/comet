import React from 'react'
import { Text } from '@chasemccoy/kit'
import { getWeather } from '../utils/data'

const Index = props => (
  <React.Fragment>
    <Text>My page</Text>
    <Text>Weather: {props.temperature} {props.weatherSummary}</Text>
  </React.Fragment>
)

Index.getInitialProps = async () => {
  const weather = await getWeather()

  return { 
    temperature: weather.temperature,
    weatherSummary: weather.summary
  }
}

export default Index