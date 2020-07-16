import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

import './search.css';
import NavBar from '../../components/navBar/index.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
     return(
       <div class='search-container'>
        <NavBar/>
        <p>search</p>
       </div>
     )
  }
}

 export default withRouter(Search);
