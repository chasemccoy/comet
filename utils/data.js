import fetch from 'isomorphic-fetch'

export const getWeather = async () => {
  const res = await fetch('https://chs-stats.now.sh/weather')
  return await res.json()
}

export const getFeedbinEntries = async () => {
  const res = await fetch('https://chs-stats.now.sh/feedbin')
  return await res.json()
}