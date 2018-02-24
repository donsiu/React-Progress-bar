import React, { Component } from 'react';
import $ from "jquery";

class InputRange extends Component {
    // onChangeListener(props){
    //     var el = this.props.refs.inputRangeRef.getDOMNode();
    //     $("body").trigger("inputRange.changed", {
    //       value: el.value
    //     });
    // }
    render() {
        return (
            <div className="input-range">
              <input type="range" ref="inputRangeRef" 
                     onChange={this.onChangeListener} 
                     className="input-range__slider"
                    min="0" max="100" step=".1" defaultValue="0" />
            </div>
        );
    }
}

export default InputRange;
  