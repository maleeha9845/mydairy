import React, { Component } from 'react';

import { GoMail} from 'react-icons/go';
import { FaRegUserCircle} from 'react-icons/fa';
import { MdLockOutline} from 'react-icons/md';
import './iconInput.css';
import InputField from '../inputfield/index.js';

class IconInputFld extends Component {
  constructor(props) {
     super(props)
     this.state = {
       active : 'false',
     }
     this.onFocus= this.onFocus.bind(this);
     this.onBlur= this.onBlur.bind(this);
   }
   onFocus(){
     this.setState({
       active: 'true',
     })
   }

   onBlur(){
     this.setState({
       active :'false',
     })
   }
   render() {
     return (
       <div class = {this.state.active === 'true' ? 'active-iconFld-container ' :'iconFld-container'}>
         {
           this.props.icon === 'email'?
             <GoMail size = {20}
              className = {this.state.active === 'true' ? 'active-input-icon ' :'input-icon'}/>:
           (this.props.icon === 'name'?
              <FaRegUserCircle size = {20}
               className = {this.state.active === 'true' ? 'active-input-icon ' :'input-icon'}/>:
           (this.props.icon=== 'password'?
              <MdLockOutline size = {20}
               className = {this.state.active === 'true' ? 'active-input-icon ' :'input-icon'}/>
              :""
            )
           )
          }
         <InputField
            placeholder= {this.props.placeholder}
            handleChange = {this.props.handleChange}
            onFocus = {this.onFocus}
            onBlur={this.onBlur}
            name= {this.props.name}
         />
      </div>
    );
  }
}

export default IconInputFld;
