import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";
import  {connect} from 'react-redux';

import './entryBar.css';
import EntryBtn from '../entryBtn/index.js';
import addEntryRequest from '../../actions/addEntry.js';
import AddSection from '../addSection/index.js';

class EntryBar extends Component {
  constructor(props) {
    super(props);
    this.state={
    active : '',
    entryOpen:"true",
    entryName : ''
  }
  this.EntryBtnfunct=this.EntryBtnfunct.bind(this);
  this.slideBtn=this.slideBtn.bind(this);
  this.addEntry=this.addEntry.bind(this);
  this.handleChange=this.handleChange.bind(this);
}

//for selected styling and passing active entry to get editor data from db.
  EntryBtnfunct(active){
    this.setState({
      active:active
    });
  }
//for opening and closing of entry bar
  slideBtn(){
    if(this.state.entryOpen=== 'true'){
      this.setState({
        entryOpen:'false'
      })
    }else{
      this.setState({
        entryOpen :'true'
      })
    }
  }

  handleChange(e){
    const value = e.target.value
    this.setState({
      entryName: value,
    })
  }
//passing new entry to db.
  addEntry(sectionName){
    const data = {
      name : this.state.entryName,
      sectionName :sectionName
    };
    this.props.addEntryRequest(data)
    console.log(this.state.entryName);
  }

  render() {
    const Header =
      this.props.entryList &&
       this.props.entryList.data &&
       this.props.entryList.data.data &&
       this.props.entryList.data.data.section_name?
       this.props.entryList.data.data.section_name : null;
    const entryList =
    this.props.entryList &&
     this.props.entryList.data &&
     this.props.entryList.data.data &&
     this.props.entryList.data.data.entries?
     this.props.entryList.data.data.entries : [];
     if (Header && this.state.entryOpen === 'true'){
      return (
        <div class = 'entryBar-container'>
          <div class = 'section-tittle'>
            <p class = 'Tittle'>{Header}</p>
            <button class = 'slide-btn' onClick = {this.slideBtn}>***</button>
          </div>
          <AddSection
            placeholder = 'add entry...'
            handleChange ={this.handleChange}
            add={()=>this.addEntry(Header)}
          />
          <div class = 'entry-body'>
          {entryList.map((entry)=>{
            return(
              <EntryBtn
                 tittle = {entry.name}
                 onClick = {()=> this.addEntry(entry.name)}
                 active = {this.state.active}
                />
              )
            }
          )
        }
        </div>

      </div>
    )
  }
    else if(Header){
      return (
        <button class = 'slide-btn' onClick = {this.slideBtn}>***</button>
      )
    }else{
      return null;
    }
  }
}

  const mapDispathToProps = dispatch => ({
    addEntryRequest: (params) => {dispatch(addEntryRequest(params))},
    }
  );

  const mapStateToProps = (state, props) => {
    return {
      entryList : state.entryList
    }
  };

export default withRouter(connect(mapStateToProps ,mapDispathToProps)(EntryBar));
