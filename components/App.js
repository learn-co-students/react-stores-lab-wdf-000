const React = require('react');
const actions = require('../actions');
const counterStore = require('../stores/counterStore')

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // Your implementation here.
        counter: counterStore.getState()
    };
    this.handleIncrementClick = this.handleIncrementClick.bind(this);
    this.handleDecrementClick = this.handleDecrementClick.bind(this);
  }

  componentDidMount () {
    this.removeListener = counterStore.addListener(state => {
      this.setState({counter: state});
    });
    // Your implementation here.
  }
  componentWillUnmount () {
    this.removeListener()
    // Your implementation here.
  }

  handleIncrementClick (ev) {
    ev.preventDefault()
    actions.increment()
  }
  handleDecrementClick (ev) {
    ev.preventDefault()
    actions.decrement()
  }

  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecrementClick} >
            -
          </button>
          <button className='increment' onClick={this.handleIncrementClick} >
            +
          </button>
        </div>
      </div>
    );
  }
}


module.exports = App;
