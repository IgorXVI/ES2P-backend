module.exports = ({
    db,
    productsByMachineAndDate
}) => (async ({
    initalDate,
    finalDate,
    type,
    dateAtribute
}) => {
    const arr = await db
        .select('*')
        .from('products')
        .whereRaw("DATE(?) BETWEEN ? AND ?", [
            dateAtribute,
            initalDate,
            finalDate
        ])
        .orWhereBetween("? BETWEEN ? AND ?", [
            dateAtribute,
            initalDate,
            finalDate
        ])

    return productsByMachineAndDate({
        type,
        dateAtribute,
        arr
    })
})