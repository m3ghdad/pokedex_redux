import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from './util/api_util';
import {receiveAllPokemon} from './actions/pokemon_actions';
import configureStore from './store/store';
import Root from './components/root'
import { HashRouter, Route } from 'react-router-dom';



// window.receiveAllPokemon = receiveAllPokemon;
// window.fetchAllPokemon = fetchAllPokemon;
// window.getState = store.getState;
// window.dispatch = store.dispatch;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
