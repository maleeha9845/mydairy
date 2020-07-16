import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

import './dash.css';
import NavBar from '../../components/navBar/index.js';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <div class='dash-container'>
        <NavBar />
        <p>journal</p>
      </div>
    )
  }
}

 export default withRouter(DashBoard);
