import { put } from 'redux-saga/effects';
import {ADD_ENTRY_SUCCESS , ADD_ENTRY_FAILURE} from "../actionTypes/addEntry.js";
import axios from 'axios';
import {ENTRY_LIST_REQUEST} from "../actionTypes/entryList.js";

function addEntry(data ){
  const sectionName = data.sectionName;
  console.log(data.name);
  const response = axios.put(
    'http://localhost:4000/channels/create-entry/'+sectionName,
    {"name": data.name}
    ).then(function(response){
    console.log(response);
    return response;
  })
  return response;
}

export default function* addEntryWorker(action){
  try{
    const response = yield addEntry(action.payload );
    yield put({ type:ADD_ENTRY_SUCCESS, payload : response})
    yield put({ type:ENTRY_LIST_REQUEST,payload :action.payload.sectionName})
  }catch (error){
    yield put({ type: ADD_ENTRY_FAILURE, error:error });
  }
}
