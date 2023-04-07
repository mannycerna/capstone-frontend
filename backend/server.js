const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 3005

const app = express()

app.use(express.json())

app.use(express.urlencoded( { extended: false} ))

app.use('/api/cigars', require('./routes/cigarRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server starts on port ${port}`))

 