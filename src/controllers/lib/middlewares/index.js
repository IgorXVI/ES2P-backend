module.exports = ({
    errors
}) => {
    const errorHandler = require("./errorHandler")({
        errors
    })

    return {
        errorHandler
    }
}