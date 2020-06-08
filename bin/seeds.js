const mongoose = require('mongoose');
require('../configs/db.config')

let FlowerModel = require('../models/Flower.model');

const flowers = [{
    name: "Bachelor'/s buttons ",
    family: "xxx",
    description: "Also known as cornflower, bachelors buttons are bright blue edible flowers with a mild grassy flavor.  While the flower petals are a tasty edible, the green parts are much less pleasant.  Carefully remove the green sepals around the flower to avoid their bitter taste.  "
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


