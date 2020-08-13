import { SECTION_LIST_REQUEST } from '../actionTypes/sectionList.js'

const SectionListRequest = data => ({
  type:SECTION_LIST_REQUEST ,
  payload: data,
});

export default SectionListRequest;
