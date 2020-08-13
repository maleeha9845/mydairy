import { put ,delay } from 'redux-saga/effects';
import { ENTRY_LIST_SUCCESS,ENTRY_LIST_FAILURE } from "../actionTypes/entryList.js";
import axios from 'axios';
function entryListSaga(data){
  const name= data;
  console.log(data)
  const response =
     axios.get('http://localhost:4000/channels/get-all-entry/'+ name)
     .then(function(response){
         return response;
         console.log(response)
     })
   console.log(response);
   return response
}

export default function* entryListWorker(action){
  try{
    const response = yield entryListSaga(action.payload);
    yield delay(1000)
    yield put({ type: ENTRY_LIST_SUCCESS, payload : response})
  }catch (error){
    yield put({ type:ENTRY_LIST_FAILURE, error });
  }
}
