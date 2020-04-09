/* eslint-disable no-unused-vars */
module.exports = ({
    errors
}) => (error, req, res, next) => {
    const sendCustomError = customError => res.status(customError.code).json({
        links: {
            self: req.protocol + '://' + req.get("host") + req.originalUrl
        },
        error: {
            name: customError.name,
            details: customError.details
        },
        requestInfo: {
            method: req.method,
            body: req.body,
            query: req.query,
            params: req.params
        }
    })

    try {
        if (error instanceof errors.CustomError) {
            sendCustomError(error)
        }
        else {
            console.error(error)
            const customError = new errors.CustomError({
                name: "UnexpectedError",
                code: 500,
                details: {
                    message: "An unexpected error has occurred, please contact the team responsible for the application."
                }
            })
            sendCustomError(customError)
        }
    }
    catch (e) {
        console.error(e)
        console.error(error)
        res.status(500).end()
    }
}