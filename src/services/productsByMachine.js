"use strict"

module.exports = ({
    arr
}) => {
    const idHash = arr.reduce((hash, el) => {
        if (!hash[el.machineName]) {
            hash[el.machineName] = {
                machineName: el.machineName,
                products: []
            }
        }

        hash[el.machineName].products.push({
            ...el,
            machineName: undefined
        })

        return hash
    }, {})

    return Object.keys(idHash).map(id => idHash[id])
}