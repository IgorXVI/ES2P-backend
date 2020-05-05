/* eslint-disable no-undef */
const productsByMachine = require("./productsByMachine")

describe("product by machine", () => {
    it("should group by machine", () => {
        const result = productsByMachine({
            arr: [
                {
                    id: 1,
                    outroAtributo: "oloco",
                    machineName: 1
                },
                {
                    id: 2,
                    outroAtributo: "oloco",
                    machineName: 1
                },
                {
                    id: 3,
                    outroAtributo: "oloco",
                    machineName: 2
                },
                {
                    id: 4,
                    outroAtributo: "oloco",
                    machineName: 2
                }
            ]
        })

        expect(JSON.stringify(result)).toEqual(JSON.stringify([
            {
                machineName: 1,
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
                machineName: 2,
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