module.exports = ({
    expressValidator
}) => ({
    router
}) => (({
    method,
    route,
    fun,
    validationSchema
}) => router[method](route, expressValidator.checkSchema(validationSchema),
    fun.constructor.name === 'AsyncFunction' ?
        (async (req, res, next) => {
            try {
                await fun(req, res)
            }
            catch (error) {
                next(error)
            }
        }) : ((req, res, next) => {
            try {
                fun(req, res)
            }
            catch (error) {
                next(error)
            }
        })))