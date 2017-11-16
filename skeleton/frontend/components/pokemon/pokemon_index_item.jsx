import React from 'react';

const PokemonIndexItem = ({pokemon}) => (
  <li className="pokemon-index-item">
    <span>{pokemon.id}</span>
    <img src={pokemon.image_url}></img>
    <span>{pokemon.name}</span>
  </li>
)

export default PokemonIndexItem;
