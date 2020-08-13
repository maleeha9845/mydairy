import  {connect} from 'react-redux';
import React, { Component } from 'react';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

import './login.css';
import LoginForm from '../../components/loginForm/index.js';
import Cover from '../../components/cover/index.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      }
  }
  render() {
    return (
      <div class = 'home-container'>
      <Cover/>
      <LoginForm/>
      </div>
    );
  }
}
export default withRouter(Login);
