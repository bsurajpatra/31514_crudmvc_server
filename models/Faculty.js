const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Faculty', facultySchema);
