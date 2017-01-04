const React = require('react');
const CounterStore = require('../stores/counterStore')
const action = require('../actions/index')

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // Your implementation here.
      counter: CounterStore.getState()
    };
  }
  componentDidMount () {
    // Your implementation here.
    this.removeListener = CounterStore.addListener (counter => {
      this.setState({ counter });
    })
  }

  componentWillUnmount () {
    // Your implementation here.
    this.removeListener();
  }


  handleDecrementClick(ev) {
    ev.preventDefault()
    action.decrement()
  }

  handleIncrementClick(ev) {
    ev.preventDefault()
    action.increment()
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