const mongoose = require('mongoose');
require('../configs/db.config')

let FlowerModel = require('../models/Flower.model');

const flowers = [{
    name: "Bee Balm",
    family: "Lamiaceae",
    description: "Bee balm flowers are also medicinal, with antimicrobial and antispasmodic properties.  They’re commonly used to treat colds, flu, coughs, digestive upset, bloating, nausea and menstrual cramps.  Typically, they’re used in salves to treat stings, scrapes and rashes."
  },
  {
    name: "BEGONIA",
    family: "Begoniaceae",
    description: "With a flavor reminiscent of fresh cucumbers, borage flowers are often added to cool summertime drinks.  While the edible flowers tend to get all the attention, borage leaves are also edible and make a lovely salad green.  The greens can also be served cooked, and added to anything in place of spinach.   "
  },
  {
    name: "CALENDULA",
    family: "bbb",
    description: "Calendula flower is used to prevent muscle spasms, start menstrual periods, and reduce fever. It is also used for treating sore throat and mouth, menstrual cramps, cancer, and stomach and duodenal ulcers. Calendula has also been used for measles, smallpox, and jaundice "
  },
  {
    name: "FRUIT BLOSSOMS ",
    family: "xxx",
    description: "The flowers of many fruiting trees and shrubs are edible long before they set fruit.  The problem is if you eat the flowers they won’t turn into fruit.  This is a good way to thin a crop if your apple tree is over-producing.  Thinning the blossoms ensures that the remaining fruit will be larger and helps prevent stress on the tree."
  },
{
  name: "HIBISCUS",
  family:"",
  dsecription: "If you’ve ever heard of hibiscus tea, maybe you never made the connection to that tropical flower in the garden.  They’re one and the same, and that sweet/tart floral tea captures the very essence of hibiscus.  The blossoms taste a bit like cranberry, and they often stain foods bright red during cooking."
}

];

//When you do the get request in recipe route, another thing you want to do is connect to the database, you get all the info from the flowers and you pass that object to the render.FlowerModelFineflowers, you need to go to query's of mongoose.
//In the same route where you get the information.FlowerModel
//a way to 

let dataBase = FlowerModel.create(flowers)
.then((response) => {
    console.log('working', response)
})
.catch(() => {
    console.log('something went wrong')
})


