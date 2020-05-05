module.exports = ({
    errors,
    expressValidator,
    router
}) => {
    const makeRoute = require("./makeRoute")({
        errors,
        expressValidator,
        router
    })

    const makeQueryWithContent = require("./makeQueryWithContent")({
        makeRoute
    })

    return {
        makeQueryWithContent
    }
}