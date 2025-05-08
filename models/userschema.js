const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  age: {
    type: Number, 
  },
  gender: {
    type: String,
    enum: ["male", "female"], 
  }
});

module.exports = mongoose.model('User', userschema); 
