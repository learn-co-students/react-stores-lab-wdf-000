const React = require('react');
const CounterStore = require('../stores/counterStore')
const actions = require('../actions')


class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      counter: CounterStore.getState()
    }

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  
  handleIncrement(ev) {
    ev.preventDefault();
    actions.increment();
  }

  handleDecrement(ev) {
    ev.preventDefault();
    actions.decrement();
  }

  componentDidMount () {
    this.removeListener = CounterStore.addListener((state) => {
      this.setState({counter: state});
    });
    this.setState({counter: CounterStore.getState()});
  }
  componentWillUnmount () {
    this.removeListener();
  }
  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{ this.state.counter }</h1>
        <div className='actions'>
          <button className='decrement'
          onClick = { this.handleDecrement } >
            -
          </button>
          <button className ='increment'
            onClick = { this.handleIncrement } >
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
