import React, { Component } from 'react';
import './style.css';


class App extends Component {

  intervalId = null;

state = {
  count : 0
}

handleDecrement = () => {
  this.setState({count : this.state.count - 1})
}

handleIncrement = () => {
  this.setState ({count: this.state.count + 1})
}


handleStartTimer = () => {
  if (this.state.count > 0 && !this.intervalId) {
    this.intervalId = setInterval (() => {
    this.setState({count: this.state.count - 1}, () => {
    if (this.state.count === 0) {
    alert("Timer Finished!")
    clearInterval(this.intervalId)
    this.intervalId = null
  };
} ) ;

    }, 1000)
  };
};


handleStopTimer = () => {
  if (this.intervalId) {
    clearInterval(this.intervalId);
    this.intervalId = null;
  };
};



handleResetTimer = () => {
  this.setState({count : 0});
  clearInterval(this.intervalId);
  this.intervalId = null;
}


render () {
  return <div className='main'>
    <h1>Simple Timer</h1>

  <div className="container">
 <button className='btn' onClick={this.handleDecrement} >-</button>
<span className='text'>{this.state.count}</span>
<button className='btn' onClick={this.handleIncrement} >+</button>
    </div>

    <div className="container">
  <button onClick={this.handleStartTimer} className="btn">Start</button>
  <button onClick={this.handleResetTimer} className="btn">Reset</button>
  <button onClick={this.handleStopTimer} className="btn">Stop</button>
</div>
  </div>
}
}

export default App;