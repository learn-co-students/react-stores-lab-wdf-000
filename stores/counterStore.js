const Store = require('./Store')


class CounterStore extends Store{
  // Your implementation here.
  // Hint: extend the Store class!
  constructor(initialState=0) {
    super()
    this.state = initialState
  }

   increment(){
     this.setState(this.state += 1)
   }

   decrement(){
     this.setState(this.state -= 1)
   }



}

module.exports = new CounterStore();
