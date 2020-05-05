/* eslint-disable no-undef */
const productsByMachineAndDate = require("./productsByMachineAndDate")

describe("product by machine and date", () => {
    it("should group by machine and date", () => {
        const result = productsByMachineAndDate({
            arrByDate: ({
                arr,
                type,
                dateAttribute
            }) => type === "day" && dateAttribute === "createdAt" ?
                    arr[0].id === 1 ?
                        [
                            {
                                createdAt: "2020-04-08",
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
                                createdAt: "2020-04-06",
                                products: [
                                    {
                                        id: 3,
                                        otherAttr: "oloco",
                                        quantity: 20
                                    },
                                    {
                                        id: 4,
                                        otherAttr: "oloco",
                                        quantity: 20
                                    }
                                ]
                            }
                        ]
                        : [
                            {
                                createdAt: "2020-04-08",
                                products: [
                                    {
                                        id: 5,
                                        otherAttr: "oloco",
                                        quantity: 10
                                    },
                                    {
                                        id: 6,
                                        otherAttr: "oloco",
                                        quantity: 10
                                    }
                                ]
                            },
                            {
                                createdAt: "2020-04-06",
                                products: [
                                    {
                                        id: 7,
                                        otherAttr: "oloco",
                                        quantity: 5
                                    },
                                    {
                                        id: 8,
                                        otherAttr: "oloco",
                                        quantity: 5
                                    }
                                ]
                            }
                        ]
                    : [],
            productsByMachine: () => [
                {
                    machineName: 1,
                    products: [
                        {
                            id: 1,
                            createdAt: "2020-04-08 20:55:22",
                            otherAttr: "oloco",
                            quantity: 10
                        },
                        {
                            id: 2,
                            createdAt: "2020-04-08 20:55:22",
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
                },
                {
                    machineName: 2,
                    products: [
                        {
                            id: 5,
                            createdAt: "2020-04-08 20:55:22",
                            otherAttr: "oloco",
                            quantity: 10
                        },
                        {
                            id: 6,
                            createdAt: "2020-04-08 20:55:22",
                            otherAttr: "oloco",
                            quantity: 10
                        },
                        {
                            id: 7,
                            createdAt: "2020-04-06 20:55:22",
                            otherAttr: "oloco",
                            quantity: 10
                        },
                        {
                            id: 8,
                            createdAt: "2020-04-06 21:55:22",
                            otherAttr: "oloco",
                            quantity: 10
                        }
                    ]
                }
            ]

        })({
            type: "day",
            dateAttribute: "createdAt",
            arr: [
                {
                    id: 1,
                    createdAt: "2020-04-08 20:55:22",
                    otherAttr: "oloco",
                    quantity: 10,
                    machineName: 1
                },
                {
                    id: 2,
                    createdAt: "2020-04-08 20:55:22",
                    otherAttr: "oloco",
                    quantity: 10,
                    machineName: 1
                },
                {
                    id: 3,
                    createdAt: "2020-04-06 20:55:22",
                    otherAttr: "oloco",
                    machineName: 1,
                    quantity: 10
                },
                {
                    id: 4,
                    createdAt: "2020-04-06 21:55:22",
                    otherAttr: "oloco",
                    machineName: 1,
                    quantity: 10
                },
                {
                    id: 5,
                    createdAt: "2020-04-08 20:55:22",
                    otherAttr: "oloco",
                    quantity: 10,
                    machineName: 2
                },
                {
                    id: 6,
                    createdAt: "2020-04-08 20:55:22",
                    otherAttr: "oloco",
                    quantity: 10,
                    machineName: 2
                },
                {
                    id: 7,
                    createdAt: "2020-04-06 20:55:22",
                    otherAttr: "oloco",
                    machineName: 2,
                    quantity: 10
                },
                {
                    id: 8,
                    createdAt: "2020-04-06 21:55:22",
                    otherAttr: "oloco",
                    machineName: 2,
                    quantity: 10
                }
            ]
        })

        expect(JSON.stringify(result)).toEqual(JSON.stringify([
            {
                machineName: 1,
                productsByDate: [
                    {
                        createdAt: "2020-04-08",
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
                        ],
                        totalQuantity: 20
                    },
                    {
                        createdAt: "2020-04-06",
                        products: [
                            {
                                id: 3,
                                otherAttr: "oloco",
                                quantity: 20
                            },
                            {
                                id: 4,
                                otherAttr: "oloco",
                                quantity: 20
                            }
                        ],
                        totalQuantity: 40
                    }
                ]
            },
            {
                machineName: 2,
                productsByDate: [
                    {
                        createdAt: "2020-04-08",
                        products: [
                            {
                                id: 5,
                                otherAttr: "oloco",
                                quantity: 10
                            },
                            {
                                id: 6,
                                otherAttr: "oloco",
                                quantity: 10
                            }
                        ],
                        totalQuantity: 20
                    },
                    {
                        createdAt: "2020-04-06",
                        products: [
                            {
                                id: 7,
                                otherAttr: "oloco",
                                quantity: 5
                            },
                            {
                                id: 8,
                                otherAttr: "oloco",
                                quantity: 5
                            }
                        ],
                        totalQuantity: 10
                    }
                ]
            }
        ]))
    })
}) 