class Store {
  // Your implementation here.
  // Hint: Our <App /> component won't directly use this store, but instead the
  // CounterStore is going to inherit from it.
  constructor(st){
    this.state = st ;
    this.listeners = [];
  }

  addListener(ls){
    this.listeners.push(ls);
    const removeListener = () => { this.listeners = this.listeners.filter( (l) => l !== ls ) };
    return removeListener;
  }

  setState(st){
    this.state = st ;
    for (var i = 0, len = this.listeners.length; i < len; i++) {
      this.listeners[i](st)
    }
  }
  getState(){
    return this.state;
  }
}

module.exports = Store;
