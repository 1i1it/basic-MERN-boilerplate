const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  index: {
    type: String,
    default: ''
  },
  item: {
    type: String,
    default: ''
  },
  cost: {
    type: String,
    default: ''
  },
  tax: {
    type: String,
    default: ''
  },
  total: {
    type: String,
    default: ''
  },
});

module.exports = mongoose.model('Item', ItemSchema);
