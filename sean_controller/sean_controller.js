const Person = require('../models/person');
const mongoose = require('mongoose');

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


// Create a new record
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


// Update a workout
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
    createPerson,
    getAllPersons,
    getPerson,
    deletePerson,
    updatePerson
}