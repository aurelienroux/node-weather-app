require('dotenv').config()
const request = require('request')

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=berlin`

request({ url, json: true }, (err, resp) => {
  console.log( // eslint-disable-line
    `
    It is currently ${resp.body.current.temperature} degrees in ${resp.body.location.name}.
    It feels like ${resp.body.current.feelslike} degrees.
    Weather conditions are ${resp.body.current.weather_descriptions[0]}
    `
  )
})
