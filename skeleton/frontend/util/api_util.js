// define functions that make ajax requests fetching
//information from our rails api.

export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  })
);

export const fetchSinglePokemon = id => (
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`
  })
);
