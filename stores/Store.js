class Store {
  // Your implementation here.
  // Hint: Our <App /> component won't directly use this store, but instead the
  // CounterStore is going to inherit from it.
  constructor (initialState) {
    this.state = initialState;
    this.listeners = [];
  }

  addListener (listener) {
    this.listeners.push(listener);
    const removeListener = () => {
      this.listeners = this.listeners.filter((eachlistener) => {
        return listener !== eachlistener
      });
    }
    return removeListener;
  }

  setState(state) {
    this.state = state;
    this.listeners.forEach((listener) => {
      listener(state);
    });
  }

  getState() {
    return this.state;
  }
}

module.exports = Store;


