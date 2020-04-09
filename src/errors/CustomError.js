module.exports = class CustomError extends Error {
    constructor({
        name,
        code,
        details
    }) {
        super(`Custom Error ${name}`)
        this.name = name
        this.code = code
        this.details = details
    }
}