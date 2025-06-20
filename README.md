# API Node.js - Jeux Vidéo (Mongo + Docker)

## Description

API REST permettant de gérer des fiches de jeux vidéo.

## Lancement

```bash
docker-compose up --build

##################### CECI EST UN APERÇU DE CE SERA NOTRE RAPPORT ##########################################
📄 README.md – API Jeux Vidéo Dockerisée
🎮 Projet : API de gestion de jeux vidéo


📦 Description
Cette application expose une API REST permettant de :

Créer, modifier, supprimer et lister des jeux vidéo

Chaque jeu contient :

title : Titre du jeu

platform : Plateforme

rating : Note

price : Prix

date : Année de sortie

🔁 Routes de l’API
Méthode	URL	Action
GET	/games	Liste tous les jeux
POST	/games	Ajoute un nouveau jeu
PUT	/games/:id	Met à jour un jeu existant
DELETE	/games/:id	Supprime un jeu

🧱 Technologies utilisées
Node.js + Express

MongoDB

Mongoose (ORM Mongo)

Docker + Docker Compose

📁 Arborescence du projet

node-api-mongo-docker-lab/
├── api/
│   ├── Dockerfile
│   ├── server.js
│   ├── models/
│   │   └── Game.js
│   ├── routes/
│   │   └── games.js
│   ├── package.json
├── .env
├── docker-compose.yml
└── README.md
⚙️ Configuration Docker
🔹 Dockerfile (/api)


FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "server.js"]
🔹 .env (à la racine)
env

MONGO_URI=mongodb://mongo:27017/gamesdb
🔹 docker-compose.yml

version: '3.8'

services:
  mongo:
    image: mongo:6
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

  api:
    build: ./api
    ports:
      - "3000:3000"
    env_file:
      - .env
    restart: unless-stopped
    depends_on:
      - mongo

volumes:
  mongo-data:
🚀 Commandes d'installation et de lancement

# Depuis le dossier racine
docker-compose up --build
Pour arrêter proprement :


docker-compose down
✅ Vérification des conteneurs

docker ps
Tu dois voir 2 conteneurs actifs :

node-api-mongo-docker-lab-api-1

node-api-mongo-docker-lab-mongo-1

🧪 Tests Postman - Vérifié & Validé 
🔸 Exemple POST :

POST http://localhost:3000/games
{
  "title": "The Legend of Zelda",
  "platform": "Switch",
  "rating": 9.5,
  "date": 2018,
  "price": 80
}
🔸 GET :
GET http://localhost:3000/games

🔸 PUT :
PUT http://localhost:3000/games/:id

json

{
  "title": "Zelda Updated",
  "platform": "Switch",
  "rating": 9.9,
  "date": 2019,
  "price": 75
}
🔸 DELETE :
DELETE http://localhost:3000/games/:id

📸 Captures à insérer
Ajoute ici des captures d'écran :

✅ Les 4 tests Postman (CRUD)

✅ Conteneurs Docker actifs (docker ps)

✅ (Facultatif) Interface web sur / si tu l’as ajoutée