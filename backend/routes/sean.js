const express = require('express');
const router = express.Router();
const {
  createPerson,
  createBillRecord,
  updateBillRecord,
  getAllPersons,
  getPerson,
  deletePerson,
  updatePerson,
  getAllBills,
  clearAllBills,
  getBillById,
  searchForRecords,
  deleteBill,
} = require('../sean_controller/sean_controller');

////////////////////////////////////////////////////////////////

// GET all bill records
router.get('/getAllBills', getAllBills);

// CREATE a record
router.post('/createBill', createBillRecord);

// UPDATE a record
router.patch('/updateBill/:id', updateBillRecord);

// DELETE all bill records
router.delete('/clearAllBills', clearAllBills);

// GET a specific bill by search criteria
router.get('/searchForRecords', searchForRecords);

// // GET a specific bill by its ID
// router.get("/getBillById/:id", getBillById);

// GET a specific bill by its ID
router.get('/:id', getBillById);

// DELET a record
router.delete('/:id', deleteBill);

////////////////////////////////////////////////////////////////

router.get('/', async (req, res) => {
  res.send("Hello, you're on /sean route.");
});

// GET all records
router.get('/getAll', getAllPersons);

// GET one record
router.get('/:id', getPerson);

// CREATE a record
router.post('/create', createPerson);

// DELET a record
router.delete('/:id', deletePerson);

// UPDATE a record
router.put('/:id', updatePerson);

module.exports = router;
