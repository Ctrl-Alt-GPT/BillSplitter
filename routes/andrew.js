const express = require('express');
const router = express.Router();
var uid = require('uid/secure');

router.get("/", async (req, res) => {
    const generatedUid = uid();

    res.send(generatedUid);
});

module.exports = router;