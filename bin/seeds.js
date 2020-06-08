const mongoose = require('mongoose');
require('../configs/db.config')

let FlowerModel = require('../models/Flower.model');

const flowers = [{
    name: "Tomato salad with flowers, za’atar and farro recipe ",
    family: "xxx",
    description: "Almost too pretty to eat, it is a great way to use the most magical of ingredients, edible flowers, which instantly turn anything into a celebration. Whether you buy your pesticide-free flowers at your farmers’ market, fine grocery store, or grow some in your garden, any combination will work here and add wonderful fragrance and color to your salad."
  },
  {
    name: "Bachelor A ",
    family: "aaa",
    description: "Also known as cornflower, bachelors buttons are bright blue edible flowers with a mild grassy flavor.  While the flower petals are a tasty edible, the green parts are much less pleasant.  Carefully remove the green sepals around the flower to avoid their bitter taste.  "
  },
  {
    name: "Bachelor B ",
    family: "bbb",
    description: "Also known as cornflower, bachelors buttons are bright blue edible flowers with a mild grassy flavor.  While the flower petals are a tasty edible, the green parts are much less pleasant.  Carefully remove the green sepals around the flower to avoid their bitter taste.  "
  },
];

let dataBase = FlowerModel.create(flowers)
.then((response) => {
    console.log('working', response)
})
.catch(() => {
    console.log('something went wrong')
})


