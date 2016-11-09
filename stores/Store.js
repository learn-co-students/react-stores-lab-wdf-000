class Store {
  // Your implementation here.
  // Hint: Our <App /> component won't directly use this store, but instead the
  // CounterStore is going to inherit from it.
  constructor(initialState){
    this.state = initialState;
    this.listeners = [];
  }

  setState(status){
    this.state = status;
      for (let listener of this.listeners) {
        listener.call(this, status);
      }
  }

  getState(){
    return this.state;
  }

  addListener(listener){
    this.listeners.push(listener);
    const removeListener = () => {
      this.listeners = this.listeners.filter((listn) => listener !== listn);
    };
    return removeListener;
  }
}

module.exports = Store;
