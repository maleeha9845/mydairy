import { SECTION_LIST_REQUEST ,SECTION_LIST_SUCCESS , SECTION_LIST_FAILURE} from "../actionTypes/sectionList.js";
import  {connect} from 'react-redux';

const initialState = {
  fetching : false,
  data : null,
  error:null,
};

const sectionList = (state = initialState, action) => {
  switch (action.type) {
    case SECTION_LIST_REQUEST:
      return {
        ...state, fetching : true
      };
    case SECTION_LIST_SUCCESS:
      return {
        ...state, fetching: false,  data:action.payload
      };
    case SECTION_LIST_FAILURE:
        return {
          ...state ,fetching:false , error : action.error
        };
      default:
      return state;
    }
  }
export default sectionList;
