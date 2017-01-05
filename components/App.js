const React = require('react');
const counterStore = require('../stores/counterStore')
const action = require('../actions')




class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    counter: counterStore.getState()
    }

  }

  //this is the constructor for the app component
  //it sets its initial state to the counterStore store getState method. the getState method for the counterStore store is borrowed from the store store.


  handleDecrement(ev){
    ev.preventDefault()
    action.decrement()
    // we use action methods so that if a majority of my components use the same functionality i can just call the the action method to keep my code Dry. this function will call on the counterStore stop decrement method which will then call of the setState method and set the state to decrement by 1. since this changes the current coutner state we are rendering in our render method because coutnerStore.getState() returns another value. our componenet state has changed thus we rerender.
  }

  handleIncrement(ev){
    ev.preventDefault()
    action.increment()
  }

  componentDidMount () {
    this.removeListener = counterStore.addListener((state) => {
      debugger;
      this.setState({counter: state})
    });
    this.setState({counter: counterStore.getState()})
  }

  //after the component is initally mounted you want to make sure you are setting the state to the state of the store we are using. When the component is mounted we add our component to the listeners array for our store. we call the couterStore addListener function which is borrowed from the store store. we pass a callback function as parameter to the add listener function. in this callback function we set the state to the state argument we retrieved. Meaning the this scope of the callback function is the coutnerStore store and we are setting the state of the coutnerStore store to the state passed into the parameters. after we execute the addListener function we can then set the state for our app component to the counterStore.getState function. So when out store is updated, we are also undating in sync.



  componentWillUnmount () {
     this.removeListener();
  }

  //the componentWillUnmount lifecycle function will have to end the lifecycle methods we have running in componentDidMount right before the componenet is about to unmount. This will end our long running processor. Otherwise the lifecycle function may continue to execute once the component is unmounted.

  shouldComponentUpdate (nextState) {
     return nextState.counter !== this.state.counter;
  }

  //this function checks if the component should rerender. just in case we need to prevent anu unessicary rerendering of components causeing longer load time and discriptincies.

  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecrement.bind(this)}>
            -
          </button>
          <button className='increment' onClick={this.handleIncrement.bind(this)}>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
