import React, { Component } from 'react';
import progress from '../Component/ProgressBar.css';

class ProgressBar extends Component {
    constructor(props){
        super(props);
        this.state={
            max : props.data.max || 100,
            min : props.data.min || 0,
            value : props.data.value || 50,
            color : props.data.color.toString(),
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({   
            max : nextProps.data.max,
            min : nextProps.data.min,
            value : nextProps.data.value,
            color : nextProps.data.color.toString()
        });
    }

    render() {
        var progressBarStyle = {
          width: this.state.value + '%',
          maxWidth : this.state.max + '%',
          minWidth : this.state.min + '%',
          backgroundColor : this.state.color
        };

        return (
        <div id="ProgressBar" className="outter">
          <div className="progress">
            <div className="progressbar" style={progressBarStyle}></div>
            <span className="progressvalue">{this.state.value + '%'}</span>
          </div>
        </div>
        );
    }
}

export default ProgressBar;
  