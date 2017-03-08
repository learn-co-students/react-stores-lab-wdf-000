const React = require('react');
const actions = require('../actions');
const counterStore = require('../stores/CounterStore')

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // Your implementation here.
      counter: counterStore.getState()
    };
    this.handleIncClick = this.handleIncClick.bind(this);
    this.handleDecClick = this.handleDecClick.bind(this);
  }

  handleDecClick(ev) {
    ev.preventDefault();
    actions.decrement()
  }

  handleIncClick(ev) {
    ev.preventDefault();
    actions.increment()
  }



  componentDidMount () {
    // Your implementation here.
    this.removeListener = counterStore.addListener(counter => {
      this.setState({counter})
    })

  }
  componentWillUnmount () {
    // Your implementation here.
    this.removeListener();
  }
  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecClick}>
            -
          </button>
          <button className='increment' onClick={this.handleIncClick}>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
