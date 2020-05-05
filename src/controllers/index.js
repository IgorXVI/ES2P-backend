module.exports = ({
    services,
    errors,
    expressValidator,
    express
}) => {
    const router = express.Router()

    const lib = require("./lib")({
        errors,
        expressValidator
    })

    const productController = require("./products")({
        services,
        lib,
        expressValidator,
        express
    })

    router.use("/products", productController)

    router.use(lib.middlewares.errorHandler)

    return router
}