const Store = require('./Store');

class CounterStore extends Store {
  // Your implementation here.
  // Hint: extend the Store class!
  constructor () {
    super(0);
  }

  increment(){
    const increased = this.getState() + 1
    return this.setState(increased)
  }

  decrement(){
    const decreased = this.getState() - 1
    return this.setState(decreased)
  }

}

module.exports = new CounterStore();
