module.exports = {
    up: knex => knex.schema
        .createTable("machines", table => {
            table.increments("id")

            table.timestamp('created_at')
                .notNullable()
                .defaultTo(knex.fn.now())

            table.timestamp('updated_at')
                .notNullable()
                .defaultTo(knex.fn.now())

            table.string("name", 255)
                .unique()
                .notNullable()
        })
        .createTable("products", table => {
            table.increments("id")

            table.timestamp('created_at')
                .notNullable()
                .defaultTo(knex.fn.now())

            table.timestamp('updated_at')
                .notNullable()
                .defaultTo(knex.fn.now())

            table.date("execution_start")

            table.date("execution_end")

            table.integer("quantity")
                .unsigned()
                .notNullable()

            table.integer("machine_id")
                .unsigned()
                .notNullable()
                .references("machines.id")
        }),
    down: knex => knex.schema
        .dropTable("products")
        .dropTable("machines")
}