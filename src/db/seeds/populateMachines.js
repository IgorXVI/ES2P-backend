module.exports = {
    seed: async knex => knex("machines")
        .insert([
            {
                id: 3,
                name: "ON3D"
            }
        ])
}