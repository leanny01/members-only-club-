const express =require( 'express')
const path =require( 'path')
const bodyParser =require( 'body-parser')
const cookieParser =require( 'cookie-parser')
const compress =require( 'compression')
const cors =require( 'cors')
const helmet =require( 'helmet')
const messageRoute =require( './routes/message.routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())

// secure apps by setting various HTTP headers
app.use(helmet())
// enable CORS - Cross Origin Resource Sharing
app.use(cors())

// mount routes
//app.use('/', userRoutes)
app.use('/api/messages', messageRoute)

module.exports = app