import { put , delay} from 'redux-saga/effects';
import { SECTION_LIST_SUCCESS,SECTION_LIST_FAILURE } from "../actionTypes/sectionList.js";
import axios from 'axios';
function  SectionListSaga(data){
  console.log(data);
  const response =
     axios.get('http://localhost:4000/channels/get-all-sections')
     .then(function(response){
         return response;
         console.log(response)
     });
   return response;
}

export default function* SectionListWorker(action){
  try{
    const response = yield SectionListSaga(action.payload);
    //yield delay (500)
    yield put({ type: SECTION_LIST_SUCCESS, payload : response})
  }catch (error){
    yield put({ type:SECTION_LIST_FAILURE, error });
  }
}
