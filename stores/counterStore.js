const Store = require('./Store');

class CounterStore extends Store {
  decrement(){
    let current = this.state;
    this.setState(current - 1);
  }

  increment(){
    let current = this.state;
    this.setState(current + 1);
  }

}

module.exports = new CounterStore(0);
