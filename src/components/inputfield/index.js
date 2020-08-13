import React , { Component } from 'react';
import './inputfield.css';

class InputField extends Component {
  constructor(props) {
     super(props);
     this.state={
     }
  }
  render() {
    return (
       <div class='input-container'>
         <input
           class ='input-field'
           type="text"
           name = {this.props.name}
           placeholder = {this.props.placeholder}
           onChange= {this.props.handleChange}
           onFocus={this.props.onFocus}
           onBlur={this.props.onBlur}
         />
       </div>
    );
  }
}

export default InputField;
