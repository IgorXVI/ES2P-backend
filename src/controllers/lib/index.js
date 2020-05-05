module.exports = ({
    errors,
    expressValidator
}) => {
    const middlewares = require("./middlewares")({
        errors
    })

    const start = require("./start")({
        errors,
        expressValidator
    })

    return {
        middlewares,
        start
    }
}