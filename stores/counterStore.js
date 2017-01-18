const Store = require('./Store');


class CounterStore extends Store{
  // Your implementation here.
  // Hint: extend the Store class!
  constructor() {
    super(0);
  }
  
  increment() {
    const newState = this.getState() + 1;
    this.setState(newState);
  }

  decrement() {
    const newState = this.getState() - 1;
    this.setState(newState);
  }
}

module.exports = new CounterStore();
