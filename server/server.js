const path = require('path')
const express = require('express')
const  MongoClient = require('mongodb')

require('dotenv').config();


const app = express()

app.get('/', (req, res) => {
  res.status(200).send(template())
})

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup'

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },(err, db)=>{
  console.log("Connected successfully to mongodb server")
  db.close()
})
