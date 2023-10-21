const express = require('express');
const router = express.Router();
const {
    createPerson,
    createBillRecord,
    getAllPersons,
    getPerson,
    deletePerson,
    updatePerson,
    getAllBills,
    clearAllBills
} = require('../sean_controller/sean_controller');

router.get("/", async (req, res) => {
    res.send("Hello, you're on /sean route.")
});

// GET all records
router.get("/getAll", getAllPersons);






// GET all bill records
router.get("/getAllBills", getAllBills)

// CREATE a record
router.post("/createBill", createBillRecord);

// DELETE all bill records
router.delete("/clearAllBills", clearAllBills);




// GET one record
router.get("/:id", getPerson);

// CREATE a record
router.post("/create", createPerson);



// DELET a record
router.delete("/:id", deletePerson);

// UPDATE a record
router.put("/:id", updatePerson);

module.exports = router;