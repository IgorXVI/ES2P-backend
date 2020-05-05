module.exports = ({
    makeRoute
}) => options => makeRoute({
    ...options,
    fun: async (req, res) => {
        const result = await options.fun(req)
        res.status(200).json({
            data: result
        })
    }
})