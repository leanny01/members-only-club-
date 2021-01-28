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
    console.log(err.message)
  }
  console.info('Server started on port %s.', port)
})


const local_mongodb_url = 'mongodb://0.0.0.0:27017/member-only-db?authSource=admin'

const mongodb_url =  process.env.DEV_ENV ==='dev' ? local_mongodb_url : process.env.MONGODB_URI 
console.log(mongodb_url)

MongoClient.connect(mongodb_url,{ useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => console.log(`connected toDB`))
.catch( err =>console.log(`could not connected toDB ${err}`))

