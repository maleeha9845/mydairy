import { ENTRY_LIST_REQUEST ,ENTRY_LIST_SUCCESS , ENTRY_LIST_FAILURE} from "../actionTypes/entryList.js";
import  {connect} from 'react-redux';

const initialState = {
  fetching : false,
  data : null,
  error:null,
};

const entryList = (state = initialState, action) => {
  switch (action.type) {
    case ENTRY_LIST_REQUEST:
      return {
        ...state, fetching : true , data: ''
      };
    case ENTRY_LIST_SUCCESS:
      return {
        ...state, fetching: false,  data:action.payload
      };
    case ENTRY_LIST_FAILURE:
        return {
          ...state ,fetching:false , error : action.error
        };
      default:
      return state;
    }
  }
export default entryList;
