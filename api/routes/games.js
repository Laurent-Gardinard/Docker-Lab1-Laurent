const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

// ici, nous avons notre Méthode GET all games pour récupérer tous les jeux
router.get('/', async (req, res) => {
    const games = await Game.find();
    res.json(games);
});

// ici, c'est notre Méthode POST a game pour ajouter un nouveau jeu
// elle attend que le corps de la requête contienne les données du jeu à ajouter
router.post('/', async (req, res) => {
    const game = new Game(req.body);
    await game.save();
    res.status(201).json(game);
});

// Et ensuite, ici nous avons notre Méthode PUT update a game pour mettre à jour un jeu existant
// elle attend que l'ID du jeu à mettre à jour soit passé dans l'URL
router.put('/:id', async (req, res) => {
    try {
        const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedGame);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Enfin, notre Méthode DELETE a game pour supprimer un jeu existant
// elle attend que l'ID du jeu à supprimer soit passé dans l'URL
router.delete('/:id', async (req, res) => {
    try {
        await Game.findByIdAndDelete(req.params.id);
        res.json({ message: 'Game deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
