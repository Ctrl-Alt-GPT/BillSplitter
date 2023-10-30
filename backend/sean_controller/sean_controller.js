const Person = require('../models/person');
const Bill = require('../models/bill');
const mongoose = require('mongoose');

////////////////////////////////////////////////////////////////////////////////////////

// Get all bill records
const getAllBills = async (req, res) => {
  const bill = await Bill.find({}).sort({createdAt: -1});

  // Testing find for certain queries. These formats work for finding specify records. 
  // const bill = await Bill.find({'lineItems.title' : 'dinner'}).sort({createdAt: -1});
  // const bill = await Bill.find({'lineItems.party' : 'me'}).sort({createdAt: -1});
  // const bill = await Bill.find({'lineItems.title' : 'lunch'}).sort({createdAt: -1});

  res.status(200).json(bill);
}


// Needs work.
// Get a bill by its Id
const getBillById = async (req, res) => {

  // const id = req.params;
  const id = req.query;
  console.log("id = " + JSON.stringify(id));
  // const bill = await Bill.find({'_id': id});
  const bill = await Bill.find({id});
  res.status(200).json(bill);
  // console.log(JSON.stringify(bill));
}



const createBillRecord = async (req, res) => {

  // const {lineItems, tallies} = req.body;
  // const combined = new Bill({lineItems, tallies});

  // Incorporating tax and tips. 
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
  getBillById
}