module.exports = ({
    expressValidator,
    errors,
    router
}) =>  (({
    method,
    route,
    fun,
    validationChain
}) => {
    const checkValidationErrors = req => {
        const vResult = expressValidator.validationResult(req)

        if (!(vResult.isEmpty())) {
            throw new errors.ValidationError({
                details: vResult.errors
            })
        }
    }

    const handler = fun.constructor.name === 'AsyncFunction' ?
        (async (req, res, next) => {
            try {
                checkValidationErrors(req)
                await fun(req, res)
            }
            catch (error) {
                next(error)
            }
        }) : ((req, res, next) => {
            try {
                checkValidationErrors(req)
                fun(req, res)
            }
            catch (error) {
                next(error)
            }
        })

    return router[method](route, validationChain, handler)
})