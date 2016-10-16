const Store = require('./Store.js')

class CounterStore extends Store {
  // Your implementation here.
  // Hint: extend the Store class!
  increment() {
    this.state += 1;
  }

  decrement() {
    this.state -= 1;
  }

}

module.exports = new CounterStore();
