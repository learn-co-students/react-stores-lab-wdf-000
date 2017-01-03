class Store {
  // Your implementation here.
  // Hint: Our <App /> component won't directly use this store, but instead the
  // CounterStore is going to inherit from it.
  constructor(initialState){
    this.state = initialState
    this.listeners = []
  }
  addListener(listener){
    this.listeners.push(listener)
      return (removeListener)=>{
        this.listeners = this.listeners.filter((l) => listener !== l);
    }
  }

  setState(newState){
    this.state = newState
    for (const listener of this.listeners) {
      listener(newState);
    }
  }

  getState(){
    return this.state
  }
}

module.exports = Store;
