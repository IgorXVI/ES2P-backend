module.exports = ({
    knex
}) => {
    const config = require("./knexfile")

    const envConfig = config[process.env.NODE_ENV]

    const db = knex(envConfig)

    return db
}