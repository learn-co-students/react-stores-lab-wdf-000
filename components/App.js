const React = require('react');
const counterStore = require('../stores/counterStore.js');
const actions = require('../actions/index.js');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter:counterStore.getState(),
    };
    this.handleDec = this.handleDec.bind(this);
    this.handleInc = this.handleInc.bind(this);
  }
  componentDidMount () {
    this.removeListener = counterStore.addListener( (st) => {this.setState({counter:st})} );
  }
  componentWillUnmount () {
    this.removeListener();
  }

  handleDec(e){
    e.preventDefault();
    actions.decrement();
  }

  handleInc(e){
    e.preventDefault();
    actions.increment();
  }

  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button onClick={this.handleDec} className='decrement'>
            -
          </button>
          <button onClick={this.handleInc}className='increment'>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
