const counterStore = require('../stores/counterStore');


function increment(){
  return counterStore.increment();
}

function decrement(){
  return counterStore.decrement();
}

module.exports = {
  increment,
  decrement

};
