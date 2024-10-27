import React from 'react';
import './App.css';  // Import the CSS file

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  reset = () => {
    this.setState({ count: 0 });
  }

  render() {
    const { count } = this.state;
    
    return (
      <div className="counter-container">
        <h2 className="counter-title">Counter</h2>
        
        <div className="counter-display">
          {count}
        </div>
        
        <div className="counter-buttons">
          <button 
            onClick={this.decrement}
            className="counter-button decrement"
          >
            -
          </button>
          
          <button 
            onClick={this.reset}
            className="counter-button reset"
          >
            Reset
          </button>
          
          <button 
            onClick={this.increment}
            className="counter-button increment"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;