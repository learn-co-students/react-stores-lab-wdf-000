const Store = require('../stores/Store');

class CounterStore extends Store {
  // Your implementation here.
  // Hint: extend the Store class!
  componentDidMount () {
    Store.addListener((state) => {
      this.setState(state)
    });
    this.setState(Store.getState())
  }

  constructor() {
  	super();
  	this.state = 0
  }

  increment() {
  	let currentState = this.getState();
  	let newState = currentState + 1;
  	return this.setState(newState);
  }

  decrement() {
  	let currentState = this.getState();
  	let newState = currentState - 1;
  	return this.setState(newState);
  }
}

module.exports = new CounterStore();