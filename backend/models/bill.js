const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lineItemSchema = new Schema({
  title: String,
  party: String,
  amount: String,
  sequenceNumber: Number,
  id: String,
});

const tallySchema = new Schema({
  party: String,
  share: Number,
});

const billSchema = new Schema({
  lineItems: [lineItemSchema],
  tallies: [tallySchema],
}, {timestamps: true});


// const billSchema = new Schema({

//   "lineItems": [{
//     "title": String,
//     "party": String,
//     "amount": String
//   }],
//   "tallies": {
//     "party": String,
//     "share": Number
//   },

  // Keys might need to be strings.
  // lineItems: [{
  //   title: String,
  //   party: String,
  //   amount: Number
  // }],
  // tallies: {
  //   party: String,
  //   share: Number
  // },
	
// }, {timestamps: true})

module.exports = mongoose.model('Bill', billSchema);