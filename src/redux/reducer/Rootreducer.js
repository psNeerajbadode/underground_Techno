import {combineReducers} from 'redux';
import userReducer from './useReducer';
// import Stapreducer from './Stapreducer';
// import themeReducer from './themeReducer';
// import userReducer from './useReducer';

export default combineReducers({
  // isPasscode: userReducer,
  // Theme: themeReducer,
  // Stap: Stapreducer,
  User: userReducer,
});
