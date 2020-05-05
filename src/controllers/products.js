module.exports = ({
    services,
    expressValidator,
    lib,
    express
}) => {
    const router = express.Router()

    router.get("/history", lib.start.makeQueryWithContent({
        fun: async req => services.queryProductsByDate(req.query),
        validationChain: expressValidator.checkSchema({
            initialDate: {
                in: ["query"],
                optional: true,
                isISO8601: true
            },
            finitalDate: {
                in: ["query"],
                optional: true,
                isISO8601: true
            },
            type: {
                in: ["query"],
                optional: true,
                isString: true,
                isIn: ["day", "month"]
            },
            dateAttribute: {
                in: ["query"],
                optional: true,
                isIn: ["createdAt", "updatedAt", "executionStart", "executionEnd"]
            }
        })
    }))

    return router
}