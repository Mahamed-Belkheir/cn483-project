
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'Xperia 1 II', price: 3800, description: "Sony's latest flagship phone", image_url: "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-II-o.jpg"},
        {id: 2, name: 'iPhone 12', price: 2800, description: "Apple's latest non-pro iphone", image_url: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg"},
        {id: 3, name: 'Mi 11', price: 3000, description: "Xiaomi's 2021 Flagship Mi phone", image_url: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi11.jpg"},
        {id: 4, name: 'Galaxy S21 Ultra', price: 5200, description: "Samsung's large penta-camera flagship", image_url: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-ultra-5g-.jpg"},
      ]);
    });
};
