const request = require('request')

const geocode = (location, callback) => {
  const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    location
  )}.json?access_token=${process.env.MAPBOX_API_KEY}&limit=1`

  request({ url: geocodeUrl, json: true }, (err, resp) => {
    if (err) {
      callback('Unable to connect to geocode service', undefined)
    } else if (resp.body.features.length === 0) {
      callback('Unable to find location', undefined)
    } else {
      const placeName = resp.body.features[0].place_name
      const longitude = resp.body.features[0].center[0]
      const latitude = resp.body.features[0].center[1]
      callback(undefined, { placeName, longitude, latitude })
    }
  })
}

module.exports = geocode
