"use strict"

module.exports = ({
    type,
    arrName,
    dateAttribute,
    arr
}) => {
    const determineDate = {
        day: date => date.split(" ")[0],
        month: date => {
            const splited = date.split("-")
            return `${splited[0]}-${splited[1]}`
        }
    }

    const dateHash = arr.reduce((hash, el) => {
        const dateValue = el[dateAttribute] instanceof Date ?
            el[dateAttribute].toISOString().replace("T", " ")
            : el[dateAttribute]

        const date = determineDate[type](dateValue)

        if (!hash[date]) {
            hash[date] = {
                [dateAttribute]: date,
                [arrName]: []
            }
        }

        hash[date][arrName].push({
            ...el,
            [dateAttribute]: undefined
        })

        return hash
    }, {})

    return Object.keys(dateHash).map(date => dateHash[date])
}