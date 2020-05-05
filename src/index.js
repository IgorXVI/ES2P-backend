const express = require('express')
const cors = require("cors")
const helmet = require("helmet")
const compression = require('compression')
const expressValidator = require("express-validator")
const knex = require("knex")

const app = express()
app.use(helmet())
app.use(compression())
app.use(cors())
app.options("*", cors())
app.disable('x-powered-by')

const db = require("./db")({
    knex
})
const errors = require("./errors")()
const services = require("./services")({
    db
})
const controllers = require("./controllers")({
    errors,
    express,
    expressValidator,
    services
})

app.use(controllers)

module.exports = app