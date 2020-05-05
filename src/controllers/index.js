module.exports = ({
    services,
    errors,
    expressValidator,
    express
}) => {
    const router = express.Router()

    const lib = require("./lib")({
        errors,
        expressValidator,
        router
    })

    require("./products")({
        services,
        lib,
        expressValidator
    })

    router.use(lib.middlewares.errorHandler)

    return router
}