import { connect } from 'react-redux';

import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => {
  const pokemon = state.entities.pokemon[state.pokeDisplay];
  return{
    pokemon
  }
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: id => dispatch(requestSinglePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);




// import { connect } from 'react-redux';
//
// import PokemonDetail from './pokemon_detail';
// import { requestSinglePokemon } from '../../actions/pokemon_actions';
// import { selectPokeItems } from '../../reducers/selectors';
//
// const mapStateToProps = state => {
//   const pokemon = state.entities.pokemon[state.ui.pokeDisplay];
//
//   return{
//     pokemon,
//     items: selectPokeItems(state, pokemon),
//     loading: state.ui.loading.detailLoading
//   };
// };
//
// const mapDispatchToProps = dispatch => ({
//   requestSinglePokemon: id => dispatch(requestSinglePokemon(id))
// });
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PokemonDetail);
