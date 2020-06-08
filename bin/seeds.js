const mongoose = require('mongoose');
require('../configs/db.config')

let FlowerModel = require('../models/Flower.model');

const flowers = [{
    name: "Bachelor'/s buttons ",
    family: "xxx",
    description: "Also known as cornflower, bachelors buttons are bright blue edible flowers with a mild grassy flavor.  While the flower petals are a tasty edible, the green parts are much less pleasant.  Carefully remove the green sepals around the flower to avoid their bitter taste.  ",
    img : "https://imgur.com/kizZk84",
  },
  {
    name: "Bachelor A ",
    family: "aaa",
    description: "Also known as cornflower, bachelors buttons are bright blue edible flowers with a mild grassy flavor.  While the flower petals are a tasty edible, the green parts are much less pleasant.  Carefully remove the green sepals around the flower to avoid their bitter taste.  ",
    img : "https://imgur.com/Y4QaCUH"
  },
  {
    name: "Bachelor B ",
    family: "bbb",
    description: "Also known as cornflower, bachelors buttons are bright blue edible flowers with a mild grassy flavor.  While the flower petals are a tasty edible, the green parts are much less pleasant.  Carefully remove the green sepals around the flower to avoid their bitter taste.  ",
    img :"https://imgur.com/xTRUUvx"
  },
];

let dataBase = FlowerModel.create(flowers)
.then((response) => {
    console.log('working', response)
})
.catch(() => {
    console.log('something went wrong')
})

Promise.all([dataBase])
  .then((response) => {
    mongoose.connection.close()
      .then((response) => {
        console.log('closing the database')
      })
      .catch(() => {
        console.log('something went wrong')
      })
  })
  .catch(() => {
    console.log('Something went wrong')
  })

  

