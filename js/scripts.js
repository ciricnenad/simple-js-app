//pokemon:
let pokemonRepository = (function () {
  let pokemonList = [{
  name: 'Bulbasaur',
  height: 0.7,
  weight: 6.9,
  type: ['grass', 'poison']
},

{
  name: 'Snorlax',
  height: 2.1,
  weight: 460,
  type: ['normal']
},

{
  name: 'Mr. Mime',
  height: 1.3,
  weight: 54.5,
  type: ['psychic', 'fairy']
},

{
  name: 'Ho-oh',
  height: 3.8,
  weight: 199,
  type: ['fire', 'flying']
},

{
  name: 'Horsea',
  height: 0.4,
  weight: 8,
  type: ['water']
},
];

function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.getAll().forEach(function(pokemon){
  if (pokemon.height > 2) {
  document.write(pokemon.name + " (height): " + pokemon.height + " - Wow that's big! <br/>");
  } else {
  document.write(pokemon.name + " (height): " + pokemon.height + ", <br/>");
  }
});

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll());
