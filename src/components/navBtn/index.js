import React , { Component } from 'react';

import './navBtn.css';
import {GiBookmarklet} from 'react-icons/gi';
import {GoSearch} from 'react-icons/go';
import {FiSettings} from 'react-icons/fi';

class NavBtn extends Component {
  constructor(props) {
     super(props);
     this.state={}
  }
  render() {
    return (
       <div >
         <button onClick = {this.props.onClick} class = 'navbtn'>
          {this.props.icon === 'journal' ?
            <GiBookmarklet size={25}   className={this.props.active ==='journal' ? 'icon-selected' : 'icon'}/> :
          (this.props.icon === 'setting'?
            <FiSettings size ={25} className={this.props.active === 'setting'? 'icon-selected' : 'icon'}/> :
          (this.props.icon === 'search'  ?
            <GoSearch size={25} className={ this.props.active  ==='search'? 'icon-selected' : 'icon'}/> :
          'loading..'
          )
         )
        }
        </button>
      </div>
    );
  }
}

export default NavBtn;
