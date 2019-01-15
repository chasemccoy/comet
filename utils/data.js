import fetch from 'isomorphic-fetch'

const getJSONResponse = async (url) => {
  const res = await fetch(url)
  return await res.json()
}

export const getWeather = async () => {
  return getJSONResponse('https://chs-stats.now.sh/weather')
}

export const getFeedbinEntries = async () => {
  return getJSONResponse('https://chs-stats.now.sh/feedbin')
}

export const getHyperlist = async () => {
  return getJSONResponse('https://chs-stats.now.sh/hyperlist')
}