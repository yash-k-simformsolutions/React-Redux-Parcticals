import React from 'react';
import { connect } from 'react-redux';
import './Counter.css';

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    this.props.dispatch({type: 'INCREMENT'})
  }

  decrement = () => {
    this.props.dispatch({type: 'DECREMENT'})
  }

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div className="buttons">
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
    return{
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter);