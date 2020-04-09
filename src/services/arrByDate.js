"use strict"

module.exports = ({
    determineDate
}) => ({
    dateAtribute,
    arrName
}) => (({
    arr
}) => {
    const dateHash = arr.reduce((hash, el) => {
        const date = determineDate(el[dateAtribute])

        if (!hash[date]) {
            hash[date] = {
                [dateAtribute]: date,
                [arrName]: []
            }
        }

        hash[date][arrName].push({
            ...el,
            [dateAtribute]: undefined
        })

        return hash
    }, {})

    return Object.keys(dateHash).map(date => dateHash[date])
})