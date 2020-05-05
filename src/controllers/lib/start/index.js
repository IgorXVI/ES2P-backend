module.exports = ({
    errors,
    expressValidator
}) => {
    const makeRoute = require("./makeRoute")({
        errors,
        expressValidator
    })

    const makeQueryWithContent = require("./makeQueryWithContent")({
        makeRoute
    })

    return {
        makeQueryWithContent
    }
}