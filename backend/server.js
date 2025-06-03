require('dotenv').config();

// Import des modules nécessaires
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialisation de l'application Express
const app = express();

// Middleware global
app.use(cors({
  origin: 'http://localhost:3000', // frontend React
  credentials: true,
}));
app.use(express.json()); // pour lire les JSON dans les requêtes

// Connexion à la base de données MongoDB

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connecté à MongoDB'))
  .catch(err => console.error('❌ Erreur MongoDB :', err));

// Définir les routes API
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// (Optionnel) Route de test
app.get('/', (req, res) => {
  res.send('🌐 API e-commerce en ligne');
});

// Lancement du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});