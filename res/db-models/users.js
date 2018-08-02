const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  recoveryKey: {
    index: { unique: true },
    type: String,
  },
  sites: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model('User', UserSchema);
