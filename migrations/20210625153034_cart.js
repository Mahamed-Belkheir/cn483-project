exports.up = function(knex) {
    return knex.schema
    .createTable("carts", (table) => {
        table.increments("id").primary()
		table.integer("user_id")
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTable("carts")
  };