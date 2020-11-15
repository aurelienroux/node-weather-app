const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=a8b3a7547774dbb07001c99a4e902fd2&query=munich'

request(url, (err, resp) => {
  if (err) {
    console.log(err) // eslint-disable-line
    return
  }

  const data = JSON.parse(resp.body)
  console.log(data.current) // eslint-disable-line
})
