module.exports = ({
    errors
}) => {
    const errorHandler = require("./error_handler")(errors)

    return {
        errorHandler
    }
}