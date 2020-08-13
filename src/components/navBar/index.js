import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

import './navBar.css';
import NavBtn from '../navBtn/index.js';

class NavBar extends Component {

  constructor(props) {
     super(props);
     this.state={
       active : 'jounral',
     }
     this.navBtnFunc=this.navBtnFunc.bind(this);
   }
// selected style and to natigate to selected page
  navBtnFunc(active , path){
    this.setState({
        active:active
      });
    this.props.history.push(path);
  }

  render() {
    return (
      <div class = 'navBar-container'>
        <NavBtn  icon = 'journal'
        onClick = {()=>this.navBtnFunc('journal' ,'/dash')}
        active = {this.state.active}
        />
        <NavBtn  icon = 'setting'
        onClick = {()=>this.navBtnFunc('setting' , '/setting')}
        active = {this.state.active}
        />
       <NavBtn  icon = 'search'
       onClick = {()=>this.navBtnFunc('search' , '/search')}
       active = {this.state.active}
       />
      </div>
    );
  }
}

export default withRouter(NavBar);
