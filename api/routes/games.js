const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

// GET all games
router.get('/', async (req, res) => {
    const games = await Game.find();
    res.json(games);
});

// POST a game
router.post('/', async (req, res) => {
    const game = new Game(req.body);
    await game.save();
    res.status(201).json(game);
});

// PUT update a game
router.put('/:id', async (req, res) => {
    try {
        const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedGame);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// DELETE a game
router.delete('/:id', async (req, res) => {
    try {
        await Game.findByIdAndDelete(req.params.id);
        res.json({ message: 'Game deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
