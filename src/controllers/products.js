module.exports = ({
    services,
    expressValidator,
    lib
}) => {
    lib.start.makeQueryWithContent({
        method: "get",
        route: "/history",
        fun: async req => services.queryProductsByDate(req.query),
        validationChain: expressValidator.checkSchema({
            initialDate: {
                optional: true,
                isISO8601: true
            },
            finitalDate: {
                optional: true,
                isISO8601: true
            },
            type: {
                optional: true,
                isString: true,
                in: ["day", "month"]
            },
            dateAttribute: {
                optional: true,
                in: ["createdAt", "updatedAt", "executionStart", "executionEnd"]
            }
        })
    })
}