json.pokemon do
  json.partial! 'api/pokemon/pokemon', pokemon: @pokemon
  json.extract! @pokemon, :attack, :defense, :poke_type, :moves
end

# json.pokemon do
#   json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type
#   json.image_url asset_path(@pokemon.image_url)
# end

# json.items @pokemon.items do |item|
#   json.partial! 'api/item/item', item: item
# end
