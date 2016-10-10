const counterStore = require('../stores/counterStore');

module.exports = {
  increment: function() {
    counterStore.increment()
  },
  decrement: function() {
    counterStore.decrement()
  }
};
