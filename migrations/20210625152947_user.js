exports.up = function(knex) {
    return knex.schema
    .createTable("users", (table) => {
        table.increments("id").primary()
		table.string("email")
		table.string("password")
		table.string("first_name")
		table.string("last_name")
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTable("users")
  };