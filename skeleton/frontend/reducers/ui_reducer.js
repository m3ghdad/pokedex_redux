import { combineReducers } from 'redux';
import merge from 'lodash/merge';

// import errors from './errors_reducer';
import pokeDisplay from './poke_display_reducer';

export default combineReducers({
  pokeDisplay
});
