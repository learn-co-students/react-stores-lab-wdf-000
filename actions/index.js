const counterStore = require('../stores/counterStore')



function increment(){
  debugger;
  counterStore.increment()
}

function decrement(){
  counterStore.decrement()
}


module.exports = {
  // Your implementation here.
  // Hint: We need two actions!
  increment,
  decrement

};
