//pokemon:
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

for (let i = 0; i < pokemonList.length; i++) {
   document.write(pokemonList[i].name + " height: " + pokemonList[i].height + ", ");

  if (pokemonList[i].height >2) {
   document.write(" - Wow that's big!");
 }
   document.write ("<br/>") ;
};
