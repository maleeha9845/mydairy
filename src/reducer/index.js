import { combineReducers } from 'redux'

import sectionList from "./sectionList.js";
import addSection from './addSection.js';
import entryList from "./entryList.js";
import addEntry from './addEntry.js';
import register from './register.js';
import login from './login.js';


const reducers = combineReducers({
  sectionList :sectionList,
  addSection:addSection,
  entryList:entryList,
  addEntry:addEntry,
  register:register,
  login:login,
  })

export default reducers;
