require('dotenv').config()
const process = require('process')

const geocode = require('./utils/geocode')
const weatherSearch = require('./utils/weatherSearch')

const address = process.argv[2]

if (!address) {
  console.log('No address was provided') // eslint-disable-line
} else {
  geocode(address, (geoErr, { latitude, longitude, location } = {}) => {
    if (geoErr) return console.log(geoErr) // eslint-disable-line

    return weatherSearch(latitude, longitude, (weatherErr, weatherResp) => {
      if (weatherErr) console.log(weatherErr) // eslint-disable-line

      console.log(location) // eslint-disable-line
      console.log(weatherResp) // eslint-disable-line
    })
  })
}
