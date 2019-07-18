const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
  country: {
    type: String,
    default: ''
  },
  year: {
    type: String,
    default: ''
  },
  count: {
    type: String,
    default: ''
  },
  rate: {
    type: String,
    default: ''
  },
  source: {
    type: String,
    default: ''
  },
  sourceType: {
    type: String,
    default: ''
  },
});

module.exports = mongoose.model('Record', RecordSchema);
