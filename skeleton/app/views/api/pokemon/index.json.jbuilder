@pokemons.each do |pokemon|
  json.set! pokemon.id do
    json.partial! 'api/pokemon/pokemon', pokemon: pokemon
  end
end

# @pokemon.each do |poke|
#   json.set! poke.id do
#     json.extract! poke, :id, :name
#     json.image_url image_path(poke.image_url)
#   end
# end
