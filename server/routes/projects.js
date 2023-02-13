const express = require('express');
const router = express.Router();
const Projects = require('../models/data')


router.get('/', async (req, res) => {
    try {
        const projects = await Projects.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.get('/:id', getProject, (req, res) => {
    res.json(res.project);
});

async function getProject(req, res, next) {
    let project
    try {
        project = await Projects.findById(req.params.id);
        if (project == null) {
            return res.status(404).json({ message: 'Cannot find project' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.project = project;
    next();
}

module.exports = router;