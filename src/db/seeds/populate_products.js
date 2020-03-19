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
                    machineId: 1
                },
                {
                    quantity: 82,
                    machineId: 1
                },
                {
                    quantity: 83,
                    machineId: 1
                },
                {
                    quantity: 84,
                    machineId: 1
                },
                {
                    quantity: 85,
                    machineId: 1
                },
                {
                    quantity: 86,
                    machineId: 1
                },
                {
                    quantity: 87,
                    machineId: 2
                },
                {
                    quantity: 88,
                    machineId: 2
                },
                {
                    quantity: 89,
                    machineId: 2
                },
                {
                    quantity: 90,
                    machineId: 2
                },
                {
                    quantity: 91,
                    machineId: 2
                }
            ])
    }
}