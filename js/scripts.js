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


function showDetails (pokemon) {
  console.log(pokemon.name)
}

function addListener (button, pokemon) {
  button.addEventListener ("click", function () {
    showDetails(pokemon)
  })
}

function addListItem(pokemon) {
  let pokemonList = document.querySelector(".pokemon-list");
  let listPokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
  addListener(button, pokemon);
}

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  showDetails: showDetails
}
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon)
});
