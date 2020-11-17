require('dotenv').config()
const process = require('process')
const geocode = require('./utils/geocode')
const weatherSearch = require('./utils/weatherSearch')

const location = process.argv[2]

if (!location) {
  console.log('No location was provided') // eslint-disable-line
} else {
  geocode(location, (geoErr, geoResp) => {
    if (geoErr) return console.log(geoErr) // eslint-disable-line

    return weatherSearch(geoResp, (weatherErr, weatherResp) => {
      if (weatherErr) console.log(weatherErr) // eslint-disable-line

      console.log(geoResp.placeName) // eslint-disable-line
      console.log(weatherResp) // eslint-disable-line
    })
  })
}
