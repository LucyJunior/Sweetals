
let FlowerModel = require('../models/Flower.model');
const mongoose = require('mongoose');
require('../configs/db.config');

let flowers = [{

name: "Bee Balm ",
family: " Lamiaceae",
description: "Bee balm flowers are also medicinal, with antimicrobial and antispasmodic properties.  They’re commonly used to treat colds, flu, coughs, digestive upset, bloating, nausea and menstrual cramps.  Typically, they’re used in salves to treat stings, scrapes and rashes. ",
img :"https://i.imgur.com/3IomeuH.jpg "
},
{
name: "BEGONIA ",
family: "Begoniaceae ",
description: " With a flavor reminiscent of fresh cucumbers, borage flowers are often added to cool summertime drinks.  While the edible flowers tend to get all the attention, borage leaves are also edible and make a lovely salad green.  The greens can also be served cooked, and added to anything in place of spinach.   ",
img :"https://i.imgur.com/uYlTiML.jpg "
},
{
name: "CALENDULA ",
family: " Asteraceae",
description: "Calendula flower is used to prevent muscle spasms, start menstrual periods, and reduce fever. It is also used for treating sore throat and mouth, menstrual cramps, cancer, and stomach and duodenal ulcers. Calendula has also been used for measles, smallpox, and jaundice  ",
img :"https://i.imgur.com/D2JWXCf.jpg "
},
{

name: "FRUIT BLOSSOMS  ",
family: " Rosaceae",
description: " The flowers of many fruiting trees and shrubs are edible long before they set fruit.  The problem is if you eat the flowers they won’t turn into fruit.  This is a good way to thin a crop if your apple tree is over-producing.  Thinning the blossoms ensures that the remaining fruit will be larger and helps prevent stress on the tree.",
img :" https://i.imgur.com/PS9sy8i.jpg"
},
{
name: "HIBISCUS ",
family: "Malvaceae ",
description: "Although sometimes grown for strictly ornamental purposes, hibiscus is also well known for its culinary and medicinal applications. You can eat the flower straight from the plant, but it is usually used for tea, relishes, jam or salads.Many cultures drink hibiscus tea for its medicinal properties. Some studies indicate that hibiscus may help reduce blood pressure and cholesterol levels.",
img : "https://i.imgur.com/b5GPOq9.jpg "
},
{
name: "LAVENDER ",
family: "Lamiaceae ",
description: " Lavender is a woody, floral herb originally grown in parts of northern Africa and the Mediterranean. The violet flowers are very small but plentiful.Lavender is probably best known for its distinctive fragrance, which is acclaimed for its calming effects.The combination of color and aroma make lavender a particularly desirable addition to a variety of foods, including baked goods, infused syrups, liqueurs, herbal teas, dry spice rubs and herb mixtures.Its flavor pairs well with both sweet and savory ingredients, including citrus, berries, rosemary, sage, thyme and chocolate.When cooking with lavender, it’s best to start with a small amount and increase slowly until you achieve the desired flavor, as it can quickly become overpowering.",
img :"https://i.imgur.com/WG0HhXX.jpg "
},
{
name: "Nasturtium ",
family: "Tropaeolaceae ",
description: " Nasturtium is a culinary favorite because of its brightly colored blossoms and unique, savory flavor.Both the leaves and flowers of nasturtium are edible and may be enjoyed cooked or raw. They feature a peppery, slightly spicy flavor profile, although the blossoms themselves are milder than the leaves.The funnel-shaped flowers are typically bright orange, red or yellow. They make a beautiful garnish for cakes, pastries and salads. The leaves are round and resemble small lily pads. They’re tender enough to be used as salad greens or blended into pesto. Nasturtium is not only a versatile and eye-catching ingredient but also nutritious — containing a variety of minerals and health-promoting compounds with antioxidant and anti-inflammatory effects.",
img :"https://i.imgur.com/vhsl4Dm.jpg "
},
{
name: "ROSE ",
family: " Rosaceae",
description: " A good rule of thumb for choosing a flavorful rose is that if it smells pleasant, it’ll probably taste good, too. Only eat the petals, though, because the leaves and stems don’t make a very palatable snack.Roses petals have a very aromatic, floral and slightly sweet flavor.They can be eaten raw, mixed into various fruit or green salads or dried and added to granola or mixed herbs.Fresh rose petals can also be muddled and added to liquid to create rose-infused beverages, jams and jellies. Chopped rose petals added to sugar or butter give a unique zing to otherwise ordinary ingredients.Like many other edible flowers, roses may offer health benefits. Some research suggests that certain compounds in roses may play a role in reducing anxiety and promoting relaxation.",
img :"https://i.imgur.com/6oUYyrs.jpg "
},
{
name: " SQUASH BLOSSOM",
family: " Cucurbitaceae",
description: "Although these blossoms form on all types of summer squash, the most popular come from zucchini. Zucchini flowers are bright yellow with a long, rounded bell shape. These flowers can be eaten raw as a garnish or chopped and added to salads. If you’re feeling indulgent, another delicious option is to stuff the blossoms with herbed cheeses and fry or bake them until the delicate petals become crispy. You don’t have to sacrifice your squash harvest to enjoy eating the flowers. Only the female blossoms can turn into squash, so stick to eating the male flowers to ensure a full harvest. The male flowers have a long, thin stem and typically grow around the outer edges of the plant. Female flowers tend to grow closer to the plant’s center and have a small, bulbous fruit at the base of the blossom where it meets the stem.",
img :"https://i.imgur.com/CjJQViv.jpg "
},
{
name: "Chamomile ",
family: "Asteraceae",
description: "Chamomile is a floral herb used in cooking and traditional medicine for centuries. Medicinally, chamomile is often consumed to reduce anxiety and improve sleep quality. The flowers closely resemble daisies, albeit much smaller. They lend a slightly sweet, earthy flavor to the foods they’re cooked with. Most recipes call for heating the flowers in a liquid to extract their flavors and bioactive compounds. The leaves and flowers are usually dried first but can be used fresh. While most often utilized for chamomile tea, the blossoms can also make syrups or other infusions for baked goods, smoothies or desserts.",
img :"https://i.imgur.com/lIzrHWk.jpg "   
}];

let dataBase = FlowerModel.create(flowers)
.then((response) => {
    console.log('working', response)
})
.catch(() => {
    console.log('somdething went wrong')
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