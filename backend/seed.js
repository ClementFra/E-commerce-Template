require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
 {
    name: "Casque Bluetooth Sony WH-1000XM5",
    description: "Casque à réduction de bruit active, autonomie 30h.",
    price: 379.99,
    image: "https://fr.shopping.rakuten.com/photo/sony-wh-1000xm5-casque-bluetooth-avec-reduction-du-bruit-noir-2219636951_L.jpg",
  },
  {
    name: "Apple MacBook Air M2",
    description: "Écran 13,6\", puce M2, SSD 256Go, 8Go RAM.",
    price: 1199.00,
    image: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_SL1500_.jpg",
  },
  {
    name: "Montre connectée Garmin Venu 2",
    description: "Montre GPS avec suivi de santé complet.",
    price: 349.00,
    image: "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/61PuvI78oWS._AC_SL1500_.jpg",
  },
  {
    name: "Nintendo Switch OLED",
    description: "Console portable avec écran OLED 7 pouces.",
    price: 319.00,
    image: "https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg",
  },
  {
    name: "Samsung Galaxy S23",
    description: "Écran 6.1\", Snapdragon 8 Gen 2, 128Go.",
    price: 959.00,
    image: "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/41xL-rs6wJL._AC_SL1300_.jpg",
  },
  {
    name: "Aspirateur robot Roborock S8",
    description: "Aspiration intelligente, nettoyage haute performance.",
    price: 599.99,
    image: "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/71ZCXAWP1uL._AC_SL1500_.jpg",
  },
  // autres produits...
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connecté à MongoDB");

    // Supprimer les anciens produits
    await Product.deleteMany({});

    // Insérer les nouveaux produits
    await Product.insertMany(products);

    console.log("Produits insérés avec succès");
    process.exit();
  } catch (error) {
    console.error("Erreur lors du seed :", error);
    process.exit(1);
  }
}

seedDB();
