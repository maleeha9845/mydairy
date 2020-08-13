import React , { Component } from 'react';
import './add.css';

import  InputField from '../inputfield/index.js';
import SectionBtn from '../sectionBtn/index.js';

class AddSection extends Component {
  constructor(props) {
     super(props);
     this.state={}
  }

  render() {
    return (
       <div class = 'add'>
         <InputField
            placeholder = {this.props.placeholder}
            handleChange= {this.props.handleChange}
         />
         <SectionBtn
            lable ='add'
            color = '#4ebdf8'
            onClick={this.props.add}
          />
       </div>
    );
  }
}

export default AddSection;
