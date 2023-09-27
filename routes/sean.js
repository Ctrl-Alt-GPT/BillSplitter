const express = require('express');
const router = express.Router();
const {
    createPerson,
    getAllPersons,
    getPerson,
    deletePerson,
    updatePerson
} = require('../sean_controller/sean_controller');

router.get("/", async (req, res) => {
    res.send("Hello, you're on /sean route.")
});

// GET all records
router.get("/getAll", getAllPersons);

// GET one record
router.get("/:id", getPerson);

// CREATE a record
router.post("/create", createPerson);

// DELET a record
router.delete("/:id", deletePerson);

// UPDATE a record
router.put("/:id", updatePerson);

module.exports = router;