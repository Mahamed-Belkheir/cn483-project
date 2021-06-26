exports.up = function(knex) {
    return knex.schema
    .createTable("user_cart_products", (table) => {
        table.increments("id").primary()
		table.integer("user_id")
        table.integer("product_id")
        table.integer("quantity")
        table.foreign("user_id").references("users.id")
        table.foreign("product_id").references("products.id")
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTable("user_cart_products")
  };