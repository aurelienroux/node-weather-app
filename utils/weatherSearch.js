const request = require('request')

const weatherSearch = (location, callback) => {
  const weatherUrl = `http://api.weatherstack.com/current?access_key=${
    process.env.WEATHER_API_KEY
  }&query=${encodeURIComponent(location)}`

  request({ url: weatherUrl, json: true }, (err, resp) => {
    if (err) {
      callback('Unable to connect to service', undefined)
    } else if (resp.body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(
        undefined,
        `
        It is currently ${resp.body.current.temperature} degrees in ${resp.body.location.name}. 
        It feels like ${resp.body.current.feelslike} degrees. 
        Weather conditions are ${resp.body.current.weather_descriptions[0]}
        `
      )
    }
  })
}

module.exports = weatherSearch
