const pokemon = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
  difficulty: "Medium"
};

const starterPokemon = pokemon.find(p => p.name === "Squirtle" && p.starter);
  if (starterPokemon) {
    game.party.push(starterPokemon);
  }

  const psychicTypePokemon = pokemon.find(p => p.type === "psychic" && p.name !== "Mewtwo" && p.name !== "Mew");
  const highHpPokemon = pokemon.find(p => p.hp < 100);
  const electricTypePokemon = pokemon.find(p => p.type === "electric" && p.name !== "Pikachu")

  if (highHpPokemon) {
    game.party.push(highHpPokemon);
}
if (psychicTypePokemon) {
    game.party.push(psychicTypePokemon);
}
if (electricTypePokemon) {
    game.party.push(electricTypePokemon);
}


  console.log(game.party)

