require('dotenv').config()
const request = require('request')

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=munich`

request(url, (err, resp) => {
  if (err) {
    console.log(err) // eslint-disable-line
    return
  }

  const data = JSON.parse(resp.body)
  console.log(data.location) // eslint-disable-line
})
