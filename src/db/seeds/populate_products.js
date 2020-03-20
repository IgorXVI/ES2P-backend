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
                    machine_id: 1
                },
                {
                    quantity: 82,
                    machine_id: 1
                },
                {
                    quantity: 83,
                    machine_id: 1
                },
                {
                    quantity: 84,
                    machine_id: 1
                },
                {
                    quantity: 85,
                    machine_id: 1
                },
                {
                    quantity: 86,
                    machine_id: 1
                },
                {
                    quantity: 87,
                    machine_id: 2
                },
                {
                    quantity: 88,
                    machine_id: 2
                },
                {
                    quantity: 89,
                    machine_id: 2
                },
                {
                    quantity: 90,
                    machine_id: 2
                },
                {
                    quantity: 91,
                    machine_id: 2
                }
            ])
    }
}