"use strict"

module.exports = ({
    arr
}) => {
    const idHash = arr.reduce((hash, el) => {
        if (!hash[el.machineId]) {
            hash[el.machineId] = {
                machineId: el.machineId,
                products: []
            }
        }

        hash[el.machineId].products.push({
            ...el,
            machineId: undefined
        })

        return hash
    }, {})

    return Object.keys(idHash).map(id => idHash[id])
}