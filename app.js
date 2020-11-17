require('dotenv').config()
const geocode = require('./utils/geocode')
const weatherSearch = require('./utils/weatherSearch')

const location = 'montreal'

geocode(location, (err, resp) => {
  if (err) {
    console.log(err) // eslint-disable-line
  } else {
    console.log(resp) // eslint-disable-line
  }
})

weatherSearch(location, (err, resp) => {
  if (err) {
    console.log(err) // eslint-disable-line
  } else {
    console.log(resp) // eslint-disable-line
  }
})
