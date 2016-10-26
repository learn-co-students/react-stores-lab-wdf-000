const counterStore = require('../stores/counterStore.js');

function increment() {
  counterStore.increment();
}

function decrement() {
  counterStore.decrement();
}

module.exports = {
  // Your implementation here.
  // Hint: We need two actions!
  increment,
  decrement
};
