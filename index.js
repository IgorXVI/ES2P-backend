"use strict"

require('dotenv').config()

const app = require("./src")

if (process.env.NODE_ENV !== "test") {
    const port = process.env.PORT
    app.listen(port, () => {
        console.log(`listening on port: ${port}...`)
    })
}