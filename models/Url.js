const mongoose = require('mongoose');
const shortid = require('shortid');
const { Schema } = mongoose;

const urlSchema = new Schema({
  full: {
    type: String,
    // unique: true,
    required: true
  },
  short: {
    type: String,
    // unique: true,
    required: true,
    default: shortid.generate
  },
  clicks: {
    type: Number,
    require: true,
    default: 0
  }
});

// module.exports = mongoose.model('Url', urlSchema)
const Urls = mongoose.model('Urls', urlSchema)
module.exports = Urls