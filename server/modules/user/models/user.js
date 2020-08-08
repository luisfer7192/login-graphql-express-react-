// example mongoose db model (example)
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  user_name: String,
  birth_date: String,
  email: String,
  password: String,
});

const User = model('user', userSchema);

module.exports = User;