import React , { Component } from 'react';
import  {connect} from 'react-redux';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

import './register.css';
import IconInputFld from '../iconInputFld/index.js';
import SubmitBtn from '../submitBtn/index.js';
import registerRequest from '../../actions/register.js';

class Register extends Component {
  constructor(props) {
     super(props);
     this.state={
       userName: '',
       email: '' ,
       password: '',
     }
   this.signup =this.signup.bind(this);
   this.signIn =this.signIn.bind(this);
   this.handleChange =this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value ,
    });
  }
// register request api is aclled and entered data is sent along.
  signup(path){
    const data=
      {
        name : this.state.userName,
        email : this.state.email,
        password : this.state.password,
      };
    this.props.registerRequest(data);
  }
//  if sucessfully registered push to dashboard.
  componentDidUpdate(){
    if(this.props.register.data &&
       this.props.register.data.data &&
       this.props.register.data.data.token !== ''
       ){
     this.props.history.push("/dash");
    }
  }
  componentDidMount(){
    const tokenLog =
      this.props.login.data&&
      this.props.login.data.token ?
      this.props.login.data.token : null;
     if(tokenLog === null){
      this.props.history.push('/login');
    }
  }
// navigating to login page .
  signIn(){
    this.props.history.push('/login');
  }

  render() {
    return (
       <div class = 'register-container'>
         <p class = 'register-header'> Sign up </p>
         <IconInputFld
            placeholder = 'your name...'
            icon ='name'
            name = 'userName'
            handleChange = {this.handleChange}/>
         <IconInputFld
           placeholder = 'your Email...'
           icon ='email'
           name = 'email'
           handleChange = {this.handleChange}/>
         <IconInputFld
           placeholder = 'your password...'
           icon ='password'
           name = 'password'
           handleChange = {this.handleChange}/>
          {
            this.props.register.error &&
            this.props.register.error.response &&
            this.props.register.error.response.data ?
            <p class = 'error-text'>{this.props.register.error.response.data}</p> :null
          }
         <div class ='reg-submitBtn' >
            <SubmitBtn
              lable = 'Sign up'
              onClick = {this.signup}/>
         </div>
         <div class = 'reg-fotter'>
            <SubmitBtn
              lable ='Login'
              onClick = {this.signIn}/>
            <p class = 'reg-text'>if you already have an account </p>
        </div>
      </div>
    );
  }
}

const mapDispathToProps = dispatch => ({
      registerRequest: (params) => {dispatch(registerRequest(params))},
    }
	);
const mapStateToProps = (state, props) => {
  return {
        register : state.register,
        login :state.login,
      }
    };

export default withRouter(connect(mapStateToProps ,mapDispathToProps)(Register));
