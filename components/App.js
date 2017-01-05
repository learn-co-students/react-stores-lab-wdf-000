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

  handleDecrement(ev){
    ev.preventDefault()
    action.decrement()
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


  componentWillUnmount () {
     this.removeListener();
  }

  shouldComponentUpdate (nextState) {
     return nextState.counter !== this.state.counter;
  }


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
