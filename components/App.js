const React = require('react');
const CounterStore = require('../stores/counterStore')
const action = require ('../actions/index')

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: CounterStore.getState()
    };
  }
  componentDidMount () {
    this.removeListener = CounterStore.addListener( counter => {this.setState({ counter });
  })
  }

  componentWillUnmount () {
    this.removeListener()
  }
  
  handleIncrementClick(ev) {
    ev.preventDefault()
    action.increment()
  }

  handleDecrementClick(ev) {
    ev.preventDefault()
    action.decrement()
  }
  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecrementClick}>
            -
          </button>
          <button className='increment' onClick={this.handleIncrementClick}>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
