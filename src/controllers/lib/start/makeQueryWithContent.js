module.exports = ({
    makeRoute
}) => ({
    method,
    route,
    fun,
    validationChain
}) => makeRoute({
    fun: async (req, res) => {
        const result = await fun(req)
        res.status(200).json({
            data: result
        })
    },
    validationChain,
    method,
    route
})