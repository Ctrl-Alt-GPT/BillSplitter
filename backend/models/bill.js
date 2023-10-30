const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lineItemSchema = new Schema({
  title: String,
  // party: String,
  party: [String],
  amount: String,
  id: String,
});

const tallySchema = new Schema({
  party: String,
  share: Number,
});

// const billSchema = new Schema({
//   lineItems: [lineItemSchema],
//   tallies: [tallySchema],
// }, {timestamps: true});

const billSchema = new Schema({
  lineItems: [lineItemSchema],
  tallies: [tallySchema],
  tax: Number,
  tips: Number
}, {timestamps: true});

module.exports = mongoose.model('Bill', billSchema);