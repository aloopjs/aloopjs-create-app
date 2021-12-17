// const { model, Schema } = require('mongoose');

module.exports = {
  name: 'User',
  attrs: {
    loginValues: [{
      type: String
    }],
    password: {
      type: String
    },
    email: {
      type: String
    },
    phone: {
      type: String
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    cover: {
      type: String
    },
    avatar: {
      type: String
    },
    status: {
      type: String
    }
  },
  options: {
    timestamps: true
  }
};
