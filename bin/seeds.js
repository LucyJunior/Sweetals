
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
},
{
  name: "Hibiscus ",
  family: " Malvaceae",
  description: " One of the most popular flowering plants is the hibiscus, which has giant petals and is native to warmer subtropical climates like Haiti, where it's also the national symbol. In Mexico, dried hibiscus is a popular gourmet treat, and is often used as a garnish on desserts, or in syrup. The variety of hibiscus that Canales and McDonald grow is most popular in drinks, like Agua de Jamaica, a.k.a. hibiscus tea. You don't actually eat the flower: you eat the part under the flower. And you can eat it fresh, too. It's wonderful — it's like a cranberry, says Canales. And they only last a day, the flower. So it opens, and it's done. Last year when we grew it, I kept it all to myself.",
  img :"https://i.mgur.com/sYcnXna.jpg"
  },
  {
  name: "Centaurea Cyanus ",
  family: "Daisy  ",
  description: "Also known as the cornflower or bachelor's button, the centaurea cyanus grows in several different pastel colors, but its most common shade is blue. Like most other edible flowers, it's mostly decorative, but it's also found as an ingredient in some teas, like Lady Grey. I love this flower, it comes in so many lovely colors, withstands our summer heat, and grows even in poor soil, Canales says. The flowers grow on tall spikes and are prolific. Pull off the petals to add a small dash of color to your salad, or as a garnish to create an irresistible plate. I recommend this flower for the home gardener because it is so easy to grow and will even self-seed.",
  img :"https://i.mgur.com/ngMsIZ3.jpg "
  },
  {
  name: "Calendula ",
  family: "Daisy ",
  description: "The Calendula, a.k.a the pot marigold, is part of the daisy family, and chefs will add its petals to rice, poultry, and salads. Bright yellow and slightly bitter, the petals are ideal for adding color to a dish. The color is a perfect egg-yolk gold. It's just gorgeous, Canales says. They are commonly found in garden centers because they are hardy. Unfortunately, you want to be very careful eating flowers intended for landscaping, she warns, because they are nearly always treated with fungicides and other sprays that aren’t appropriate for eating. So grow your own or make sure you know where they're coming from. ",
  img :"https://i.mgur.com/DAH2eRf.jpg "
  },
  {
  name: "Borage ",
  family: "Boraginaceae ",
  description: " This blue flower can grow up to three feet tall and has a refreshing taste. Borage shouldn't be dried — instead, it's meant to be eaten fresh and can be an ideal ingredient in salads, or as a garnish in drinks. Borage is often used in pastries and desserts, too — especially the candied variety, which is often a prized ingredient for cake decorators. These small flowers have cucumber-like flavor, Canales describes. Add a few to your ice water, or even freeze them in your ice cubes for a beautiful summer drink.",
  img :" https://i.mgur.com/pvD4s85.jpg"
  },
  {
  name: "Pansies ",
  family: "Viola ",
  description: "The pansy is a variety of viola that grows well either in the sun or the shade, but blooms best when it's chilly. They tend to taste perfume-y and can be used in everything from salads to punch to desserts. Pansies are beautiful on a cake. They are commonly sugared — dipped in egg white and dusted with sugar, Canales explains. They keep for months under the right circumstances. You might also find them floating in your martini. For everyday use, pluck off the petals and press onto a goat cheese log to jazz up your cheese plate.",
  img :" https://i.mgur.com/1LGsPcK.jpg"
  },
  {
  name: " Dianthus Petals",
  family: "Caryophyllaceae ",
  description: "Commonly known as the carnation, the dianthus is not entirely edible — only the petals are. As with most of their edible-flower counterparts, dianthus petals are often found as decorations on a cake. They can also be candied, steeped in wine, or even infused in vodka. Dianthus comes in a variety of bright, beautiful colors, Canales describes. Use the petals in salads, as a garnish, or chop them up and add to baked goods. A slightly sweet flavor pairs well with sweet or savory dishes.",
  img :"https://i.mgur.com/ruWyouO.jpg "
  },
  {
  name: "Radish Blossoms ",
  family: "Brassicaceae ",
  description: "Radish blossoms are typically served in savory meat and seafood dishes, and can be used in salads, too. Because she already sells both radishes and arugula, Canales says that it only makes sense that they offer the flowers as well. She especially loves radish blossoms for their tastiness and versatility. The radish is probably my favorite because sometimes [the radish itself] is too potent and you're just overwhelmed by radish flavor. But you get much more of a subtle flavor with these. We use them a lot on avocado toast.",
  img :"https://i.mgur.com/fpYeJIh.jpg"
  },
  {
  name: "Nasturtium",
  family: "Tropaeolaceae ",
  description: "Be warned: These foot-tall flowers, which taste a little bit like mustard, aren't easy to grow. “You can't baby a nasturtium or they won't flower, they'll just give you lots of leaves. They don't like to be coddled, Canales explains. In other words, if you expect anything from nasturtiums, they won't comply — but if you leave them alone, that's when they blossom. (Think of them like the cats of the edible-flower world.) The nasturtium tends to grow pretty wild where we're located, so it just makes it really easy to add to what we do already, Canales adds. If you look in the canyons, a lot of times you can just see these on the side of the road in full bloom. I wouldn't recommend just eating things off the side of the road, but they grow really well here, and they're completely edible.  Leigh Lecap, the bartender at Campfire Restaurant & Bar, makes a nasturtium syrup that he mixes into a cocktail called the Trophy Pole, made with gin, Lillet Blanc and fresh lemon juice. ",
  img : "https://i.mgur.com/VmrFtev.jpg"
  }
];

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