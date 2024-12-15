const express = require('express')
const morgan = require('morgan')
const APIRoutes = require('./routes/routes')
const cors = require('cors')
const errorMiddleware = require('./middlewares/errorMiddleware')

const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// Routes
app.use('/', APIRoutes)

// Middleware Personalizado de Errores
app.use(errorMiddleware)

module.exports = app