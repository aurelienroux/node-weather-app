require('dotenv').config()
const request = require('request')

// const weatherUrl = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=berlin`

// request({ weatherUrl, json: true }, (err, resp) => {
//   console.log( // eslint-disable-line
//     `
//     It is currently ${resp.body.current.temperature} degrees in ${resp.body.location.name}.
//     It feels like ${resp.body.current.feelslike} degrees.
//     Weather conditions are ${resp.body.current.weather_descriptions[0]}
//     `
//   )
// })

const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/berlin.json?access_token=${process.env.MAPBOX_API_KEY}&limit=1`
request({ url: geocodeUrl, json: true }, (err, resp) => {
  const longitude = resp.body.features[0].center[0]
  const latitude = resp.body.features[0].center[1]
  console.log(`Longitude is ${longitude}`) // eslint-disable-line
  console.log(`Latitude is ${latitude}`) // eslint-disable-line
})
