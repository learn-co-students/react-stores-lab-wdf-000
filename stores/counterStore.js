const Store = require('./Store.js')

class CounterStore extends Store {

  // Your implementation here.
  // Hint: extend the Store class!
  constructor(){
    super()
  }

  increment(){
    this.setState(this.state += 1)
  }

  decrement(){
    this.setState(this.state -= 1)
  }
}

module.exports = new CounterStore();
