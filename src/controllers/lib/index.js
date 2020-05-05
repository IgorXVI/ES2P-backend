module.exports = ({
    errors,
    expressValidator,
    router
}) => {
    const middlewares = require("./middlewares")({
        errors
    })

    const start = require("./start")({
        errors,
        expressValidator,
        router
    })

    return {
        middlewares,
        start
    }
}