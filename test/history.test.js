const supertest = require("supertest")
const knexCleaner = require('knex-cleaner')
const { app, db } = require("../src")

it("should group products by date", async () => {
    await db.migrate.up()

    await knexCleaner.clean(db, {
        mode: 'truncate'
    })

    await db("machines")
        .insert([
            {
                id: 1,
                name: "ON1D"
            },
            {
                id: 2,
                name: "ON2D"
            }
        ])

    await db("products")
        .insert([
            {
                quantity: 81,
                machineName: "ON1D",
                createdAt: "2020-04-04",
                updatedAt: "2020-05-04"
            },
            {
                quantity: 82,
                machineName: "ON1D",
                createdAt: "2020-04-04",
                updatedAt: "2020-05-04"
            },
            {
                quantity: 22,
                machineName: "ON2D",
                createdAt: "2020-04-04",
                updatedAt: "2020-05-04"
            },
            {
                quantity: 83,
                machineName: "ON1D",
                createdAt: "2020-05-04",
                updatedAt: "2020-05-04"
            },
            {
                quantity: 84,
                machineName: "ON1D",
                createdAt: "2020-05-04",
                updatedAt: "2020-05-04"
            }
        ])

    const res = await supertest(app)
        .get("/history?initialDate=2020-04-04&finalDate=2020-05-04")

    expect(res.statusCode).toEqual(200)
    expect(res.body.data).toEqual([
        {
            "machineName": "ON1D",
            "productsByDate": [
                {
                    "createdAt": "2020-04-04",
                    "products": [
                        {
                            "id": 1,
                            "updatedAt": "2020-05-04",
                            "executionStart": null,
                            "executionEnd": null,
                            "quantity": 81
                        },
                        {
                            "id": 2,
                            "updatedAt": "2020-05-04",
                            "executionStart": null,
                            "executionEnd": null,
                            "quantity": 82
                        }
                    ],
                    "totalQuantity": 163
                },
                {
                    "createdAt": "2020-05-04",
                    "products": [
                        {
                            "id": 4,
                            "updatedAt": "2020-05-04",
                            "executionStart": null,
                            "executionEnd": null,
                            "quantity": 83
                        },
                        {
                            "id": 5,
                            "updatedAt": "2020-05-04",
                            "executionStart": null,
                            "executionEnd": null,
                            "quantity": 84
                        }
                    ],
                    "totalQuantity": 167
                }
            ]
        },
        {
            "machineName": "ON2D",
            "productsByDate": [
                {
                    "createdAt": "2020-04-04",
                    "products": [
                        {
                            "id": 3,
                            "updatedAt": "2020-05-04",
                            "executionStart": null,
                            "executionEnd": null,
                            "quantity": 22
                        }
                    ],
                    "totalQuantity": 22
                }
            ]
        }
    ])

}, 300000)