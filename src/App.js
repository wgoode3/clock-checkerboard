import React, { Component } from 'react';
import './App.css';

class Square extends Component {
  render() {
    let style = {
      width: "200px", 
      height: "200px", 
      color: this.props.color, 
      backgroundColor: this.props.background,
      display: "inline-block",
      verticalAlign: "top"
    };
    return (
      <h1 style={style}>{this.props.color} on {this.props.background}</h1>
    );
  }
}

class Box extends Component {
  render() {
    let boxStyle = {
      height: "50px",
      width: "50px",
      display: "inline-block",
      backgroundColor: "blanchedalmond"
    }
    if(this.props.num%2===0) {
      boxStyle.backgroundColor = "mediumseagreen";
    }
    return <div className="box" style={boxStyle}></div>;
  }
}

class Row extends Component {
  render() {
    let boxes = [];
    for(let i=0; i<this.props.size; i++) {
      boxes.push(<Box num={i+this.props.i} key={i} />);
    }
    return (
      <div className="box">
        {boxes}
      </div>
    )
  }
}

class Board extends Component {
  render() {
    let rows = [];
    for(let i=0; i<this.props.size; i++) {
      rows.push(<Row i={i} size={this.props.size} key={i} />);
    }
    return rows;
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      time: new Date()
    }
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({time: new Date()});
    }, 1000);
  }

  render() {
    return (
      <>
        <h1>The time is:</h1>
        <h2>{this.state.time.toLocaleTimeString()}</h2>
        <Square color="white" background="blue" />
        <Square color="blue" background="red" />
        <Square color="green" background="pink" />
        <Board size="8" />
      </>
    );
  }
}

export default App;
