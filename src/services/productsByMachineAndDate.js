module.exports = ({
    arrByDate,
    productsByMachine
}) => (({
    type,
    dateAttribute,
    arr
}) => {
    const arrByMachine = productsByMachine({
        arr
    })

    return arrByMachine.map(el => {
        const productsByDate = arrByDate({
            type,
            dateAttribute,
            arrName: "products",
            arr: el.products
        }).map(el => {
            el.totalQuantity = el.products
                .reduce((total, p) => total + p.quantity, 0)
            return el
        })

        return {
            machineName: el.machineName,
            productsByDate
        }
    })
})