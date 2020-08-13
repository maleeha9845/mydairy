import { put } from 'redux-saga/effects';
import axios from 'axios';

import {ADD_SECTION_SUCCESS , ADD_SECTION_FAILURE} from "../actionTypes/addSection.js";
import {SECTION_LIST_REQUEST} from '../actionTypes/sectionList';
function addSection(data ){
  console.log(data);
  const response = axios.post('http://localhost:4000/channels/create-section',{
    "name":data.name,
    "color":data.color
  }).then(function(response){
    console.log(response);
    return response;
  })
  return response;
}

export default function* addSectionWorker(action){
  try{
    const response = yield addSection(action.payload );
    yield put({ type:ADD_SECTION_SUCCESS, payload : response})
    yield put({ type:SECTION_LIST_REQUEST})
  }catch (error){
    yield put({ type: ADD_SECTION_FAILURE, error:error });
  }
}
