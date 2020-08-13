import React , { Component } from 'react';
import './entryBtn.css';

class EntryBtn extends Component {
  constructor(props) {
     super(props);
     this.state={}
  }
  render() {
    return (
       <div class = 'entry-btn-container'>
         <button
            onClick = {this.props.onClick}
            class = {
            this.props.active === this.props.tittle ?
            'entry-btn-onSelect' :'entry-btn'}>
            <p class = 'entry-tittle'>{this.props.tittle}  </p>
            <p class= 'entry-time'> {this.props.time} {this.props.place} {this.props.date}</p>
            <p class = 'entry-location'>{this.props.location}</p>
        </button>
       </div>
    );
  }
}

export default EntryBtn;
