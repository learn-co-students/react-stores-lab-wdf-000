const Store = require('./Store')


class CounterStore extends Store{

  constructor(initialState = 0){
    super()
    this.state = initialState
  }

  //this store borrows most of its functional methods from the store store. this is so that many stores can use one store to inherate from. this way we are not repeating ourselves when its comes to code the same functions over and over. this this is the store store will refer to the counterStore scope because the function is borrowed in reference to the store borrowing. The initial state of this store is 0 by default is no other initial state is passsed. 



  increment(){
    this.setState(this.state += 1)
  }

  decrement(){
    this.setState(this.state -= 1)
  }


}

module.exports = new CounterStore();
