const React = require('react');
const counterStore = require('../stores/counterStore');
const actions = require('../actions');

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      counter: counterStore.getState()
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  getCounter(){
    return this.state.counter
  }

  componentDidMount () {
    this.removeListener = counterStore.addListener((state) => {
    this.setState({counter: state});
    });
    this.setState({counter: counterStore.getState()});
  }

  componentWillUnmount () {
    this.removeListener()
  }

  shouldComponentUpdate (nextState) {
    return nextState.counter !== this.state.counter;
  }

  increment(ev){
    ev.preventDefault()
    actions.increment()
  }

  decrement(ev){
    ev.preventDefault()
    actions.decrement()
  }

  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.getCounter()}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.decrement}>
            -
          </button>
          <button className='increment' onClick={this.increment}>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
