import React , { Component } from 'react';
import './cover.css';

class Cover extends Component {
  constructor(props) {
     super(props);
     this.state={}
  }
  render() {
    return (
       <div class = 'cover-container'>
        <p> Journal</p>
       </div>
    );
  }
}

export default Cover;
