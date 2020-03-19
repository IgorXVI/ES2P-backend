module.exports = {
    up: knex => knex.schema
        .createTable("machines", table => {
            table.increments("id")
            table.timestamps()
            table.string("name", 255)
                .unique()
                .notNullable()
        })
        .createTable("products", table => {
            table.increments("id")
            table.timestamps()
            table.integer("quantity")
                .unsigned()
                .notNullable()
            table.integer("machineId")
                .unsigned()
                .notNullable()
                .references("machines.id")
        }),
    down: knex => knex.schema
        .dropTable("products")
        .dropTable("machines")
}