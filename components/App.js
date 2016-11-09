const React = require('react');
const counterStore = require('../stores/counterStore');
const actions = require('../actions')

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: counterStore.getState()
    };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }
  componentDidMount () {
    // Your implementation here.
    this.removeListener = counterStore.addListener(counter => {
      this.setState({ counter })
    });
  }

  componentWillUnmount () {
    this.removeListener();
  }

  add(ev){
    ev.preventDefault();
    actions.increment();
  }
  remove(ev){
    ev.preventDefault();
    actions.decrement();
  }

  render () {
    return (
      <div className='app'>
        <h3 className='iDoDeclare'>{this.state.counter == 8 ? 'WOOHOO! INFINITY, LOPSIDED!' : ''}</h3>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.remove}>
            -
          </button>
          <button className='increment' onClick={this.add}>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
