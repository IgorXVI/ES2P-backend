const express = require('express')
const cors = require("cors")
const helmet = require("helmet")
const compression = require('compression')

const app = express()
app.use(helmet())
app.use(compression())
app.use(cors())
app.options("*", cors())
app.disable('x-powered-by')

const db = require("./db")({
    knex: require("knex")
})
const errors = require("./errors")()
const helpers = require("./helpers")()
const middlewares = require("./middlewares")({
    errors
})

app.get("/test", async (req, res, next) => {
    try {
        const result = await db('products').where('id', 1)
        res.status(200).json(result)
    }
    catch (error) {
        next(error)
    }
})

app.use(middlewares.errorHandler)

module.exports = app