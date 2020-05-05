module.exports = ({
    services,
    expressValidator,
    lib
}) => {
    lib.start.makeQueryWithContent({
        method: "get",
        route: "/history",
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
        }),
        fun: async req => services.queryProductsByDate(req.query)
    })
}