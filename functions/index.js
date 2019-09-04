const functions = require('firebase-functions');
const express = require('express')
const axios = require('axios')

const app = express()

app.post('/test', (req, res) => {
  console.log(req.body)
})

app.get('/api/v1/get-tacos', async (req, res) => {
  const yelpAPI = functions.config().yelp.key
  console.log(yelpAPI)
  try {
    const data = await axios('https://api.yelp.com/v3/businesses/search?term=tacos&location=los%20angeles', {
        headers: {
          "Authorization": `Bearer ${yelpAPI}`
        }
      });
      res.json({data: data.data})
  } catch(err) {
    console.log(err)
  }
})

exports.app = functions.https.onRequest(app)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
