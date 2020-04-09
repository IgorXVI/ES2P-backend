/* eslint-disable no-undef */
const arrByDate = require("./arrByDate")

describe("arr by date tests", () => {
    it("should group by day", () => {
        const result = arrByDate({
            determineDate: date => date.split(" ")[0]
        })({
            arrName: "products",
            dateAtribute: "createdAt"
        })({
            arr: [
                {
                    id: 1,
                    createdAt: "2020-04-08 20:55:22",
                    otherAttr: "oloco",
                    quantity: 10
                },
                {
                    id: 2,
                    createdAt: "2020-04-07 20:55:22",
                    otherAttr: "oloco",
                    quantity: 10
                },
                {
                    id: 3,
                    createdAt: "2020-04-06 20:55:22",
                    otherAttr: "oloco",
                    quantity: 10
                },
                {
                    id: 4,
                    createdAt: "2020-04-06 21:55:22",
                    otherAttr: "oloco",
                    quantity: 10
                }
            ]
        })

        expect(JSON.stringify(result)).toEqual(JSON.stringify([
            {
                createdAt: "2020-04-08",
                products: [
                    {
                        id: 1,
                        otherAttr: "oloco",
                        quantity: 10
                    }
                ]
            },
            {
                createdAt: "2020-04-07",
                products: [
                    {
                        id: 2,
                        otherAttr: "oloco",
                        quantity: 10
                    }
                ]
            },
            {
                createdAt: "2020-04-06",
                products: [
                    {
                        id: 3,
                        otherAttr: "oloco",
                        quantity: 10
                    },
                    {
                        id: 4,
                        otherAttr: "oloco",
                        quantity: 10
                    }
                ]
            }
        ]))
    })

    it("should group by month", () => {
        const result = arrByDate({
            determineDate: date => {
                const splited = date.split("-")
                return `${splited[0]}-${splited[1]}`
            }
        })({
            arrName: "products",
            dateAtribute: "createdAt"
        })({
            arr: [
                {
                    id: 1,
                    createdAt: "2020-04-08 20:55:22",
                    otherAttr: "oloco",
                    quantity: 10
                },
                {
                    id: 2,
                    createdAt: "2020-04-07 20:55:22",
                    otherAttr: "oloco",
                    quantity: 10
                },
                {
                    id: 3,
                    createdAt: "2020-05-06 20:55:22",
                    otherAttr: "oloco",
                    quantity: 10
                },
                {
                    id: 4,
                    createdAt: "2020-05-06 21:55:22",
                    otherAttr: "oloco",
                    quantity: 10
                }
            ]
        })

        expect(JSON.stringify(result)).toEqual(JSON.stringify([
            {
                createdAt: "2020-04",
                products: [
                    {
                        id: 1,
                        otherAttr: "oloco",
                        quantity: 10
                    },
                    {
                        id: 2,
                        otherAttr: "oloco",
                        quantity: 10
                    }
                ]
            },
            {
                createdAt: "2020-05",
                products: [
                    {
                        id: 3,
                        otherAttr: "oloco",
                        quantity: 10
                    },
                    {
                        id: 4,
                        otherAttr: "oloco",
                        quantity: 10
                    }
                ]
            }
        ]))
    })
}) 