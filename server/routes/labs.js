const express = require('express');
const router = express.Router();
const Labs = require('../models/projectShema')


router.get('/', async (req, res) => {
    try {
        const labs = await Labs.find({ type: "Lab" });
        res.json(labs);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.get('/:id', getLab, (req, res) => {
    res.json(res.lab);
});

async function getLab(req, res, next) {
    let project
    try {
        lab = await Labs.findById(req.params.id);
        if (lab == null) {
            return res.status(404).json({ message: 'Cannot find project' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.lab = lab;
    next();
}

module.exports = router;