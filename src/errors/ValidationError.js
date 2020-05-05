module.exports = ({
    CustomError
}) => (class ValidationError extends CustomError {
    constructor({
        details
    }) {
        super({
            name: "ValidationError",
            code: 400,
            details
        })
    }
})