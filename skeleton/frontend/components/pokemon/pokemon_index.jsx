import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends Component {
  componentWillMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;

    return (
      <section className="pokedex">
        <ul>
          {pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
        </ul>

        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
      </section>
    );
  }
}

export default PokemonIndex;








// import React from 'react';
// import PokemonIndexItem from './pokemon_index_item'
// import { Route } from 'react-router-dom';
// import PokemonDetailContainer from './pokemon_detail_container';
//
//
//
// class PokemonIndex extends React.Component {
//   componentDidMount() {
//     this.props.requestAllPokemon();
//   }
//   render() {
//     const { pokemon } = this.props;
//     const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
//     return (
//       <section>
//         <ul>
//           {pokemonItems}
//         </ul>
//         <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
//       </section>
//     );
//   }
// }
//
// export default PokemonIndex;



// import React from 'react';
// import { Route } from 'react-router-dom';
// import PokemonIndexItem from './pokemon_index_item';
// import PokemonDetailContainer from './pokemon_detail_container';
//
// class PokemonIndex extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   componentDidMount() {
//     return this.props.requestAllPokemon();
//   }
//
//   render() {
//     const pokemonItems = this.props.pokemon.map((poke) => (
//       <PokemonIndexItem key={poke.id} pokemon={poke} />
//     ));
//
//     return(
//       <section>
//         <Route
//           path="/pokemon/:pokemonId"
//           component={PokemonDetailContainer}
//         />
//         <ul>
//           { pokemonItems }
//         </ul>
//       </section>
//     );
//   }
// }
//
// export default PokemonIndex;
