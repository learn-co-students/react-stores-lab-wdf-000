class Store {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }
  
  addListener(listener) {
    this.listeners.push(listener);
    const removeListener = () => {
      this.listeners = this.listeners.filter((l) => listener !== l);
    };
    return removeListener
  }

  setState(newState) {
    this.state = newState;
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }

  getState(){
    return this.state
  }
}

module.exports = Store;
