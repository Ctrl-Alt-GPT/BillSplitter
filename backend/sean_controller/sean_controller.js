const Person = require('../models/person');
const Bill = require('../models/bill');
const mongoose = require('mongoose');

////////////////////////////////////////////////////////////////////////////////////////

// Get all bill records
const getAllBills = async (req, res) => {
  const bill = await Bill.find({}).sort({createdAt: -1});
  res.status(200).json(bill);
}

// Get specific records
const searchForRecords = async (req, res) => {
  const searchQuery = req.query
  const bill = await Bill.find(searchQuery).sort({createdAt: -1});
  res.status(200).json(bill);
}

const getBillById = async (req, res) => {

  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "Invalid ID"});
  }
  const bill = await Bill.findById(id);
  if (!bill) {
    return res.status(404).json({error: "Bill not found"});
    
  }
  res.status(200).json([bill]);
}

const createBillRecord = async (req, res) => {
  const {lineItems, tallies, tax, tips } = req.body;
  const combined = new Bill({lineItems, tallies, tax, tips});
  try {
    const bill = await Bill.create(combined);
    res.status(200).json(bill);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
}


const clearAllBills = async (req, res) => {

  try {
    await Bill.deleteMany({});
    res.status(200).json({ message: 'All records deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}



// Delete a bill record
const deleteBill = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "Invalid ID"});
  }

  const recordToDelete = await Bill.findByIdAndDelete(id);

  if (!recordToDelete) {
    return res.status(400).json({error: "No person to delete"})
  }

  res.status(200).json(recordToDelete);

}



////////////////////////////////////////////////////////////////////////////////////////






// Get all person records
const getAllPersons = async (req, res) => {
  const persons = await Person.find({}).sort({createdAt: -1});
  res.status(200).json(persons);
}


// Get single record
const getPerson = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "Invalid ID"});
  }

  const person = await Person.findById(id);

  if (!person) {
    return res.status(404).json({error: "Person not found"});
  }

  res.status(200).json(person);
}


// Create a new Person record
const createPerson = async (req, res) => {
  const {fname, age} = req.body;
  
  try {
    const person = await Person.create({fname, age});
    res.status(200).json(person);
  } catch(err) {
    res.status(400).json({error: err.message});
  }
}


// Delete a record
const deletePerson = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "Invalid ID"});
  }

  const personToDelete = await Person.findByIdAndDelete(id);

  if (!personToDelete) {
    return res.status(400).json({error: "No person to delete"})
  }

  res.status(200).json(personToDelete);

}


// Update a record
const updatePerson = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "Invalid ID"});
  }

  const updatedPerson = await Person.findByIdAndUpdate(id, {
    ...req.body
  })

  if (!updatedPerson) {
    return res.status(400).json({error: "No person to update"})
  }

  res.status(200).json(updatedPerson);
}


module.exports  = {
  createBillRecord,
  createPerson,
  getAllPersons,
  getPerson,
  deletePerson,
  updatePerson,
  getAllBills,
  clearAllBills,
  getBillById,
  deleteBill,
  searchForRecords
}