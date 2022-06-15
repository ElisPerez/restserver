const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
  img: {
    type: String,
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  role: {
    type: String,
    required: true,
    // enum: ['ADMIN_ROLE', 'USER_ROLE'], // enum is not necessary. Now we have roles in database.
  },
  state: {
    type: Boolean,
    default: true,
  },
});

module.exports = model('User', UserSchema);