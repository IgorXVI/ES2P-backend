module.exports = {
    up: knex => knex.schema
        .createTable("machines", table => {
            table.increments("id")

            table.timestamp('createdAt')
                .notNullable()
                .defaultTo(knex.fn.now())

            table.timestamp('updatedAt')
                .notNullable()
                .defaultTo(knex.fn.now())

            table.string("name", 255)
                .unique()
                .notNullable()
        })
        .createTable("products", table => {
            table.increments("id")

            table.timestamp('createdAt')
                .notNullable()
                .defaultTo(knex.fn.now())

            table.timestamp('updatedAt')
                .notNullable()
                .defaultTo(knex.fn.now())

            table.timestamp("executionStart")

            table.timestamp("executionEnd")

            table.integer("quantity")
                .unsigned()
                .notNullable()

            table.string("machineName")
                .notNullable()
                .references("machines.name")
        }),
    down: knex => knex.schema
        .dropTable("products")
        .dropTable("machines")
}