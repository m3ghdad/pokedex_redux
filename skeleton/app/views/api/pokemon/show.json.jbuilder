json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type
  json.image_url asset_path(@pokemon.image_url)
end

json.items do
  json.array! @pokemon.items, :happiness, :id, :pokemon_id, :image_url, :price
end
