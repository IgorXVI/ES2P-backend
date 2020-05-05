module.exports = ({
    db,
    productsByMachineAndDate
}) => (async ({
    initialDate = new Date().toISOString(),
    finalDate = new Date().toISOString(),
    type = "day",
    dateAttribute = "createdAt"
}) => {
    const arr = await db
        .select('*')
        .from('products')
        .whereBetween(dateAttribute, [
            initialDate,
            finalDate
        ])

    return productsByMachineAndDate({
        type,
        dateAttribute,
        arr
    })
})