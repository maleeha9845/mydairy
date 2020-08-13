import {REGISTER_REQUEST} from '../actionTypes/register.js';

const registerRequest = data => ({
  type: REGISTER_REQUEST,
  payload: data
});

export  default registerRequest;
