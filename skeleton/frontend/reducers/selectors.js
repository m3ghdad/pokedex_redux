import values form 'lodash/values';

export const selectAllPokemon = (state) => values(state.entities.pokemon);
