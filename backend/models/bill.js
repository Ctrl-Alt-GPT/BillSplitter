const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const billSchema = new Schema({
    
  lineItems: [{
    title: String,
    party: String,
    amount: Number
  }],
  tallies: [{
    party: String,
    share: Number
  }],
	
}, {timestamps: true})

module.exports = mongoose.model('Bill', billSchema);