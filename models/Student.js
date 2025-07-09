const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: 2
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/.+\@.+\..+/, "Email is invalid"],
    unique: true
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: 10,
    max: 100
  },
  course: {
    type: String,
    required: [true, "Course is required"]
  }
});

module.exports = mongoose.model('Student', studentSchema);