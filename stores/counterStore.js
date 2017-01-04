const Store = require('./Store.js');

class CounterStore extends Store {
  constructor() {
    super();
    this.state = 0
  } 

  increment() {
    ++ this.state;
  }

  decrement() {
    -- this.state;
  }
}

module.exports = new CounterStore();
