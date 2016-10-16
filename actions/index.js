const CounterStore = require('../stores/counterStore');

function increment() {
  CounterStore.increment()
}

function decrement() {
  CounterStore.decrement()
}

module.exports = {
  increment,
  decrement
};
