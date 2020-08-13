                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";
import  {connect} from 'react-redux';

import './sectionBar.css';
import SectionBtn from '../sectionBtn/index.js';
import SectionListRequest from '../../actions/sectionList.js';
import AddSection from '../addSection/index.js';
import addSectionRequest from '../../actions/addSection.js';
import EntryListRequest from '../../actions/entryList.js';


class SectionBar extends Component {
  constructor(props) {
     super(props);
     this.state={
       active : '',
       sectionOpen:"true",
       sectionName:'',
       newSection:false,
      }
     this.sectionBtnfunct=this.sectionBtnfunct.bind(this);
     this.slideBtn=this.slideBtn.bind(this);
     this.addSection=this.addSection.bind(this);
     this.handleChange=this.handleChange.bind(this);
   }
componentWillMount(){
  this.props.SectionListRequest();
}
// to get entries of seleted section.
componentDidUpdate(){
    const data = this.state.active;
    if(data!== ''){
      this.props.EntryListRequest(data);
      this.setState({
        active:''
      })
    }

  }
//selected styling and  to selcted section name
sectionBtnfunct(active){
  this.setState({
      active:active
  });
}
//opoening and closing of sectionbar.
slideBtn(){
  if(this.state.sectionOpen=== 'true'){
      this.setState({
        sectionOpen:'false'
      })
  }
   else{
     this.setState({
       sectionOpen :'true'
     })
   }
 }

  handleChange(e){
    const value = e.target.value
    this.setState({
      sectionName: value,
    })
   }
  //sending new section name along with the color to section name list.
  addSection(){
    const color = ['red', "green" , "yellow" , "peach","maroon"];
    const randomColor = color[Math.floor(Math.random() * color.length)];
    this.setState({
      color : randomColor,
      newSection: true
    });
    const sectionData = {
      name : this.state.sectionName,
      color : randomColor,
    }
    this.props.addSectionRequest(sectionData);
}

  render() {
    const sectionList =
        this.props.sectionList &&
        this.props.sectionList.data &&
        this.props.sectionList.data.data ?
        this.props.sectionList.data.data: null;
    if (sectionList === null){
      return (
        <div class = 'sectionBar-container'>
          <div class = 'section-tittle'>
            <p class = 'Tittle'>Journal</p>
            <button class = 'slide-btn' onClick = {this.slideBtn}>***</button>
          </div>
          <AddSection
            placeholder = 'add Section...'
            handleChange = {this.handleChange}
            add = {this.addSection}/>
        </div>
      )
    }else if (this.state.sectionOpen === 'true'){
      return (
        <div class = 'sectionBar-container'>
          <div class = 'section-tittle'>
            <p class = 'Tittle'>Journal</p>
            <button class = 'slide-btn' onClick = {this.slideBtn}>***</button>
          </div>
          <AddSection
            placeholder = 'add Section...'
            handleChange = {this.handleChange}
            add = {this.addSection}/>
          <div class = 'section-body'>
          {sectionList.map((section)=>{
            return(
              <SectionBtn
                 lable = {section.name}
                 count = {section.count}
                 onClick = {()=> this.sectionBtnfunct(section.name)}
                 active = {this.state.active}
                 color = {section.color}
                />
              )
            }
          )
        }
        </div>
        </div>
      );
    }else {
       return (
         <button class = 'slide-btn' onClick = {this.slideBtn}>***</button>
       )
     }
   }
 }

const mapDispathToProps = dispatch => ({
       EntryListRequest: (params) => {dispatch(EntryListRequest(params))},
       SectionListRequest: (params) => {dispatch(SectionListRequest(params))},
       addSectionRequest : (params) => {dispatch(addSectionRequest(params))},
 	});

const mapStateToProps = (state, props) => {
        return {
         sectionList : state.sectionList,
         login:state.login,
  			  }
        };

export default withRouter(connect(mapStateToProps ,mapDispathToProps)(SectionBar));
