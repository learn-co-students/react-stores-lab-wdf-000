const Store = require('../stores/Store')

class CounterStore extends Store {
  // Your implementation here.
  // Hint: extend the Store class!
  constructor() {
    super(0);



    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);


  }
  increment() {
    const stat = this.getState() + 1;
    this.setState(stat)
  }

  decrement() {
    const stat = this.getState() - 1;
    this.setState(stat)
  }
}

module.exports = new CounterStore();
