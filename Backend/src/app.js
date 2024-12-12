const express = require('express')
const morgan = require('morgan')
const APIRoutes = require('./routes/routes')
const cors = require('cors')

const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// Routes
app.use('/', APIRoutes)

module.exports = app