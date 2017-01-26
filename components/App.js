const React = require('react');


const counterStore = require('../stores/counterStore');

const actions = require('../actions')

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // Your implementation here.
      counter: counterStore.getState()

    };

    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  componentDidMount () {
    // Your implementation here.
    this.removeListener = counterStore.addListener((state) => {
      this.setState({counter: state});
    })
  }

  componentWillUnmount () {
    // Your implementation here.
     this.removeListener();
  }


  handleDecrement(e){
    e.preventDefault()
    actions.decrement()
  }

  handleIncrement(e) {
    e.preventDefault()
    actions.increment()
  }


  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecrement}>
            -
          </button>
          <button className='increment' onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
