
const Store = require('./Store');

class CounterStore extends Store{
  // Your implementation here.
  // Hint: extend the Store class!
  constructor(initialState){
    super(initialState)
    this.state = 0
  }
  increment(){
    const incremented = this.state + 1
    this.setState(incremented)
  }
  decrement(){
    const decremented = this.state - 1
    this.setState(decremented)
  }

}

module.exports = new CounterStore;
