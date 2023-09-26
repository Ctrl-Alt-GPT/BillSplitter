const express = require('express');
const router = express.Router();
var uuid = require('short-uuid');

router.get("/", async (req, res) => {
    res.send(uuid.generate());
});

module.exports = router;