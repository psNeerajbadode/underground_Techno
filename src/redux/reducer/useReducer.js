import {USER} from '../actions/ActionType';

const initialState = {};
function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER:
      return {...state, ...action.payload};
    default:
      return state;
  }
}

export default userReducer;
