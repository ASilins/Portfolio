const express = require('express');
const router = express.Router();

router.get('/:fileId', (req, res) => {
    const { fileId } = req.params;
    res.sendFile(__dirname + ".." + "/assets/" + fileId);
});

module.exports = router;