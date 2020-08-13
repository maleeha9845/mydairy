import React , { Component } from 'react';
import './submit.css';

class SubmitBtn extends Component {
  constructor(props) {
     super(props);
     this.state={}
  }
  render() {
    return (
       <div>
        <button
          class = 'submit-btn'
          onClick = {this.props.onClick} >
          <p>{this.props.lable}</p>
        </button>
       </div>
    );
  }
}

export default SubmitBtn;
