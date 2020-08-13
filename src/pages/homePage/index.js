import  {connect} from 'react-redux';
import React, { Component } from 'react';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

import './home.css';
import Register from '../../components/register/index.js';
import Cover from '../../components/cover/index.js';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      }
  }
  render() {
    return (
      <div class = 'home-container'>
      <Cover/>
      <Register/>
      </div>
    );
  }
}
export default withRouter(HomePage);
