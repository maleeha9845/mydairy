import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

import './setting.css';
import NavBar from '../../components/navBar/index.js';

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <div class = 'setting-container'>
        <NavBar class='seeting-container'/>
        <p>setting</p>
      </div>
    )
  }
}

export default withRouter(Setting);
