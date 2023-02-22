const express = require('express');
const router = express.Router();
const Tech = require('../models/techShema')


router.get('/', async (req, res) => {
    try {
        const tech = await Tech.find();
        res.json(tech);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router;