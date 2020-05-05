module.exports = () => {
    const CustomError = require("./CustomError")
    const ValidationError = require("./ValidationError")({
        CustomError
    })

    return {
        ValidationError,
        CustomError
    }
}