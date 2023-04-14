//Required API's 

const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')

//DB configuration to connect to mongoose database
const connectDB = require('./config/db')

//Port used to connect to backend server
const port = process.env.PORT || 3005

//Calling function to initiate the DB connection
connectDB()

//Calling express function to instantiate the app
const app = express()

//Use method to utilize required API's
app.use(express.json())
// app.get('/', (req, res) => res.status(200).send('Hello world'))
app.use(express.urlencoded( { extended: false} ))
app.use('/api/cigars', require('./routes/cigarRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

//Listen method to output port used by app
app.listen(port, () => console.log(`Server starts on port ${port}`))

 