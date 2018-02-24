import React, { Component } from 'react';
// import InputRange from './Component/InputRange';
import ProgressBar from './Component/ProgressBar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { max : 100, min : 0, value : 60, color : 'blue', bgColor: 'red', textColor : 'white' }
  }

  submit(props, hello) {
    this.setState({
      max : 100,
      min : 0,
      value : 30,
      color : 'red',
      bgColor: 'black',
      textColor : 'yellow'
    },function(){
      console.log(this.state);
    })
  }

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
        <ProgressBar data={this.state}/>
        <button className="w3-button w3-green" onClick={ this.submit.bind(this, this.window) }>Click Me</button> 
      </div>
    );
  }
}

export default App;
