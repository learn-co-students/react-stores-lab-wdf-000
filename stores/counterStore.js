const Store = require('./Store')

class CounterStore extends Store {
  constructor() {
    super();
    this.state = 0
  }
  
  increment() {
    this.setState(this.state + 1)
  }

  decrement() {
    this.setState(this.state - 1)
  }
}

module.exports = new CounterStore();
