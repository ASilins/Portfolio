const express = require('express');
const router = express.Router();
const Projects = require('../models/projectShema')


router.get('/', async (req, res) => {
    try {
        const sc = await Projects.find({ showcase: true });
        res.json(sc);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router;