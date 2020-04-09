module.exports = ({
    db
}) => {
    const arrByDate = require("./arrByDate")

    const productsByMachine = require("./productsByMachine")

    const productsByMachineAndDate = require("./productsByMachineAndDate")({
        arrByDate,
        productsByMachine
    })

    const queryProductsByDate = require("./queryProductsByDate")({
        db,
        productsByMachineAndDate
    })

    return {
        queryProductsByDate
    }
}