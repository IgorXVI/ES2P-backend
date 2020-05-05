module.exports = {
    seed: async knex => {
        await knex("machines")
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

        return knex("products")
            .insert([
                {
                    quantity: 81,
                    machineName: "ON1D"
                },
                {
                    quantity: 82,
                    machineName: "ON1D"
                },
                {
                    quantity: 83,
                    machineName: "ON1D"
                },
                {
                    quantity: 84,
                    machineName: "ON1D"
                },
                {
                    quantity: 85,
                    machineName: "ON1D"
                },
                {
                    quantity: 86,
                    machineName: "ON1D"
                },
                {
                    quantity: 87,
                    machineName: "ON2D"
                },
                {
                    quantity: 88,
                    machineName: "ON2D"
                },
                {
                    quantity: 89,
                    machineName: "ON2D"
                },
                {
                    quantity: 90,
                    machineName: "ON2D"
                },
                {
                    quantity: 91,
                    machineName: "ON2D"
                }
            ])
    }
}