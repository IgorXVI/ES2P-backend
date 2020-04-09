/* eslint-disable no-undef */
const productsByMachine = require("./productsByMachine")

describe("product by machine", () => {
    it("should group by machine", () => {
        const result = productsByMachine({
            arr: [
                {
                    id: 1,
                    outroAtributo: "oloco",
                    machineId: 1
                },
                {
                    id: 2,
                    outroAtributo: "oloco",
                    machineId: 1
                },
                {
                    id: 3,
                    outroAtributo: "oloco",
                    machineId: 2
                },
                {
                    id: 4,
                    outroAtributo: "oloco",
                    machineId: 2
                }
            ]
        })

        expect(JSON.stringify(result)).toEqual(JSON.stringify([
            {
                machineId: 1,
                products: [
                    {
                        id: 1,
                        outroAtributo: "oloco"
                    },
                    {
                        id: 2,
                        outroAtributo: "oloco"
                    }
                ]
            },
            {
                machineId: 2,
                products: [
                    {
                        id: 3,
                        outroAtributo: "oloco"
                    },
                    {
                        id: 4,
                        outroAtributo: "oloco"
                    }
                ]
            }
        ]))
    })
}) 