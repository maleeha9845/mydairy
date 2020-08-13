import { ENTRY_LIST_REQUEST } from '../actionTypes/entryList.js'

const EntryListRequest = data => ({
  type:ENTRY_LIST_REQUEST ,
  payload: data,
});

export default EntryListRequest;
