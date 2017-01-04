const React = require('react');
const counterStore = require('../stores/counterStore');
const actions = require('../actions');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: counterStore.getState()
    };
  }
  componentDidMount () {
    this.removeListener = counterStore.addListener((state) => 
      this.setState({
        counter: state 
      })
    )
  }
  componentWillUnmount () {
    this.removeListener()
  }
  handleInc(ev) {
    ev.preventDefault();
    actions.increment();
  }
  handleDec(ev) {
    ev.preventDefault();
    actions.decrement(); 
  }
  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDec}>
            -
          </button>
          <button className='increment' onClick={this.handleInc}>
            +
          </button>
        </div>
      </div>
    );
  }

}

module.exports = App;
