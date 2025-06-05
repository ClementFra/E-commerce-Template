const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['employee', 'client'], default: 'client' }, // distinction employés / clients
});

module.exports = mongoose.model('User', userSchema);