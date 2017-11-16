import { connect } from 'react-redux';

import {selectAllPokemon} from './reducers/selectors';
import PokemonIndex from './components/pokemon/pokemon_index'
import { requestAllPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = state => ({
  // piece of state that container subscribes to
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  // dispatch requestAllPokemon action.
  requestAllPokemon: () => dispatch(requestAllPokemon())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
