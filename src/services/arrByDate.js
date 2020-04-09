"use strict"

module.exports = ({
    type,
    arrName,
    dateAtribute,
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
        const date = determineDate[type](el[dateAtribute])

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
}