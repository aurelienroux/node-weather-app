require('dotenv').config()
const request = require('request')

const weatherUrl = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=montreal`
const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/berlin.json?access_token=${process.env.MAPBOX_API_KEY}&limit=1`

request({ url: weatherUrl, json: true }, (err, resp) => {
  if (err) {
    console.log('Unable to connect to service') // eslint-disable-line
  } else if (resp.body.error) {
   console.log('Unable to find location') // eslint-disable-line
  } else {
    console.log( // eslint-disable-line
      `
      It is currently ${resp.body.current.temperature} degrees in ${resp.body.location.name}.
      It feels like ${resp.body.current.feelslike} degrees.
      Weather conditions are ${resp.body.current.weather_descriptions[0]}
      `
    )
  }
})

request({ url: geocodeUrl, json: true }, (err, resp) => {
  if (err) {
    console.log('Unable to connect to service') // eslint-disable-line
  } else if (resp.body.features.length === 0) {
    console.log('Unable to find location') // eslint-disable-line
  } else {
    const longitude = resp.body.features[0].center[0]
    const latitude = resp.body.features[0].center[1]
    console.log(`Longitude is ${longitude}`) // eslint-disable-line
    console.log(`Latitude is ${latitude}`) // eslint-disable-line
  }
})
