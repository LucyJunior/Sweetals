const mongoose = require ('mongoose');
require('../config/db.config')

 const flowers = [
  {name: 'Gardenia', amout: 1},
  {name: 'Rose', amout: 1},
  {name: 'Margharita', amout: 1},
  {name: 'Gardenia', amout: 1}
];

FlowerModel.create(flowers)
.then((res) => {
  console.log(res)
})
.catch(() => {
  console.log('Error')
})

mongoose.connection.close()