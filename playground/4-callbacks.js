const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      lat: 0,
      lon: 0
    }
    callback(data)
  }, 3000)
}

geocode('montreal', (data) => {
  console.log(data) // eslint-disable-line
})

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b)
  }, 3000)
}

add(1, 4, (sum) => {
  console.log(sum) // Should print: 5
})
