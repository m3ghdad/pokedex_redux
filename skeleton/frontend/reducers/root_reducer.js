import {combineReducers} from 'redux';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  ui: uiReducer
});
export default rootReducer;



// import { combineReducers } from 'redux';
//
// import entities from './entities_reducer';
// import ui from './ui_reducer';
//
// export default combineReducers({
//   entities,
//   ui,
// });
