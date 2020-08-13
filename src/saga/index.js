import { all, takeLatest, takeEvery} from 'redux-saga/effects';

// saga Workers
import SectionListWorker from './sectionList.js';
import addSectionWorker from './addSection.js';
import entryListWorker from './entryList.js';
import addEntryWorker from './addEntry.js';
import registerWorker from './register.js';
import loginWorker from './login.js';
//  action actiontypes
import {SECTION_LIST_REQUEST} from "../actionTypes/sectionList.js";
import {ADD_SECTION_REQUEST } from "../actionTypes/addSection.js";
import {ENTRY_LIST_REQUEST} from "../actionTypes/entryList.js";
import {ADD_ENTRY_REQUEST } from "../actionTypes/addEntry.js";
import {REGISTER_REQUEST } from "../actionTypes/register.js";
import {LOGIN_REQUEST } from "../actionTypes/login.js";

export default function* rootSaga(){
  yield all([
    yield takeLatest(SECTION_LIST_REQUEST, SectionListWorker),
    yield takeLatest(ADD_SECTION_REQUEST, addSectionWorker),
    yield takeLatest(ENTRY_LIST_REQUEST, entryListWorker),
    yield takeLatest(ADD_ENTRY_REQUEST, addEntryWorker),
    yield takeLatest(REGISTER_REQUEST, registerWorker),
    yield takeLatest(LOGIN_REQUEST, loginWorker),

  ])
}
