# E‑commerce Template

Projet full‑stack (MERN) de boutique en ligne avec :

- **Frontend** : React 18, React Router 6, SCSS, react‑slick (carrousel)
- **Backend** : Node.js 22, Express, MongoDB (Mongoose)
- **Fonctionnalités** :
  - Affichage des produits
  - Carrousel des produits les plus chers
  - Panier global (Context API)
  - Authentification basique (Context)
  - Forum interne réservé au personnel (protections à venir)
  - Footer responsive avec newsletter
  - API RESTful (`/api/products`, `/api/products/top-expensive`, …)

---

## 1. Prérequis

| Outil | Version conseillée |
|-------|--------------------|
| Node.js | ≥ 18 (LTS) |
| npm    | ≥ 9 |
| MongoDB | instance locale ou Atlas |

---

## 2. Installation rapide

```bash
# Cloner le repo
git clone https://github.com/ton-utilisateur/ecommerce-template.git
cd ecommerce-template

# Backend
cd backend
npm install
cp .env.example .env          # renseigne ta chaîne Mongo_URI
npm run dev                   # démarre sur http://localhost:5000

# Frontend (nouvelle console)
cd ../frontend
npm install
npm start                     # démarre sur http://localhost:3000
