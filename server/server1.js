const path = require('path')
const MongoClient = require('mongoose')
const app = require('./express')

require('dotenv').config();

app.get('/', (req, res) => {
  res.status(200).send('Welcome to member only API service')
})

let port = process.env.PORT || 5000
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})


const url = 'mongodb://admin:1234@0.0.0.0:27017/member-only-db'
const mongodb_url = process.env.MONGODB_URI || url

MongoClient.connect(mongodb_url,{ useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => console.log(`connected toDB`))
.catch( err =>console.log(`could not connected toDB ${err}`))

