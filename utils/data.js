export const getWeather = async () => {
  const res = await fetch('https://chs-stats.now.sh/weather')
  return await res.json()
}