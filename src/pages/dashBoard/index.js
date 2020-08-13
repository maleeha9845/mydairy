import React from 'react';
import ReactDOM from 'react-dom';
import  {connect} from 'react-redux';
import axios from 'axios';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

import './dash.css';
import NavBar from '../../components/navBar/index.js';
import Journal from '../../components/journal/index.js';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  // security .
componentWillMount(){
  const tokenLog =
    this.props.login.data&&
    this.props.login.data.token ?
    this.props.login.data.token : null;

  const tokenReg =
    this.props.register.data&&
    this.props.register.data.data &&
    this.props.register.data.data.token?
    this.props.register.data.data.token : null;

  if(tokenLog || tokenReg){
    console.log('valid');
  }else{
    this.props.history.push('/login');
  }

    const mytoken = tokenLog ? tokenLog:tokenReg;
    axios.defaults.headers.common['Authorization'] = mytoken;
    console.log(mytoken);

}

  render(){
    return(
      <div class='dash-container'>
        <NavBar/>
        <Journal/>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
      register : state.register,
      login : state.login
   }
  };

  export default withRouter(connect(mapStateToProps)(DashBoard));
