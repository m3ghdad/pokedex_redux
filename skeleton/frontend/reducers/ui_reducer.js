import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import pokeDisplay from './poke_display_reducer';

export default combineReducers({
  pokeDisplay
});
