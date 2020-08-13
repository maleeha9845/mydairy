import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";
import  {connect} from 'react-redux';
import axios from 'axios';

import './journal.css';
import SectionBar from '../sectionBar/index.js';
import EntryBar from '../entryBar/index.js';

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return(
      <div class = 'journal-container'>
        <SectionBar/>
        <EntryBar/>
      </div>
    )
  }
}
const mapStateToProps = (state, props) => {
      return {
				login: state.login,
			  }
      };

export default withRouter(connect(mapStateToProps)(Journal));
