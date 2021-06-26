exports.up = function(knex) {
    return knex.schema
    .createTable("orders", (table) => {
        table.increments("id").primary()
		table.integer("user_id")
		table.datetime("timestamp")
		table.integer("total")
		table.specificType("items", "jsonb[]")
        table.foreign("user_id").references("users.id")
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTable("orders")
  };