module.exports = ({
    express
}) => {
    const router = express.Router()

    require("./products")({
        router
    })

    return router
}