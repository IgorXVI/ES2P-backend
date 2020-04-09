module.exports = ({
    arrByDate,
    productsByMachine
}) => (({
    type,
    dateAtribute,
    arr
}) => {
    const arrByMachine = productsByMachine({
        arr
    })

    return arrByMachine.map(el => {
        const productsByDate = arrByDate({
            type,
            dateAtribute,
            arrName: "products",
            arr: el.products
        }).map(el => {
            el.totalQuantity = el.products
                .reduce((total, p) => total + p.quantity, 0)
            return el
        })

        return {
            machineId: el.machineId,
            productsByDate
        }
    })
})