import React , { Component } from 'react';
import  {connect} from 'react-redux';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";
import './loginForm.css';
import IconInputFld from '../iconInputFld/index.js';
import SubmitBtn from '../submitBtn/index.js';
import loginRequest from '../../actions/login.js';

class LoginForm extends Component {
  constructor(props) {
     super(props);
     this.state={
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
//login request api is called sending along entred data.
  signIn(path){
    const data=
      {
        email : this.state.email,
        password : this.state.password,
      };
    this.props.loginRequest(data);
  }
//if login is sucess . route to dashboard.
  componentDidUpdate(){
    const tokenLog =
      this.props.login.data&&
      this.props.login.data.token ?
      this.props.login.data.token : null;
     if(tokenLog){
      this.props.history.push('/dash');
    }
  }
// route to home page . if needs to register.
  signup(){
    this.props.history.push('/home');
  }
  componentDidMount(){
    const tokenLog =
      this.props.login.data&&
      this.props.login.data.token ?
      this.props.login.data.token : null;
     if(tokenLog){
      this.props.history.push('/home');
    }
  }

  render() {
    return (
       <div class = 'register-container'>
         <p class = 'login-header'> Log In </p>
         <div class = 'login-fotter'>
            <p class = 'reg-text'>please log in below, or</p>
            <SubmitBtn
              lable ='sign up'
              onClick = {this.signup}/>
         </div>
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
              this.props.login.error?
              <p class = 'error-text'>{this.props.login.error}</p> :null
           }
         <div class ='reg-submitBtn' >
            <SubmitBtn
              lable = 'Sign in'
              onClick = {this.signIn}/>
         </div>
      </div>
    );
  }
}

const mapDispathToProps = dispatch => ({
    loginRequest: (params) => {dispatch(loginRequest(params))},
  }
);
const mapStateToProps = (state, props) => {
  return {
    login:state.login,
  }
};

export default withRouter(connect(mapStateToProps ,mapDispathToProps)(LoginForm));
