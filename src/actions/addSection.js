import {ADD_SECTION_REQUEST} from '../actionTypes/addSection.js';

const addSectionRequest = data => ({
  type: ADD_SECTION_REQUEST,
  payload: data
});

export  default addSectionRequest;
