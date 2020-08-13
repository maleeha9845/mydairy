import React , { Component } from 'react';
import './sectionBtn.css';

class SectionBtn extends Component {
  constructor(props) {
     super(props);
     this.state={}
  }
  render() {
    return (
       <div>
         <button
          onClick = {this.props.onClick}
          style={{color :this.props.active === this.props.lable ? "white" :this.props.color}}
          class = {this.props.active === this.props.lable ?"sec-btn-onselect":'sec-btn'}
          >
          <p>{this.props.lable}</p><p>{this.props.count}</p>
         </button>
       </div>
    );
  }
}

export default SectionBtn;
