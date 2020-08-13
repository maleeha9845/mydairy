import { put } from 'redux-saga/effects';
import {REGISTER_SUCCESS , REGISTER_FAILURE} from "../actionTypes/register.js";
import axios from 'axios';

function register(data ){
  
  const response = axios.post('http://localhost:4000/auth/register',
    {
      "name" : data.name,
      "email":data.email,
      "password":data.password
   }).then(function(response){
        return response;
        console.log(response)
    });
  return response;
}

export default function* registerWorker(action){
  try{
    const response = yield register(action.payload );
    yield put({ type:REGISTER_SUCCESS, payload : response})
  }catch (error){
    yield put({ type: REGISTER_FAILURE, error:error });
  }
}
