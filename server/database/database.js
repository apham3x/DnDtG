const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/characters', {useNewUrlPaser: true, useUnifiedTopology: true});
const db = mongoose.connection;

const characterSchema = new mongoose.Schema({
  user: {type: String},
  name: {type: String},
  class: {type: String},
  stats: {
    str: {type: Number},
    dex: {type: Number},
    con: {type: Number},
    int: {type: Number},
    wis: {type: Number},
    cha: {type: Number}
  },
  skills: [
    {
      name: {type: String},
      description: {type: String},
      damageDie: {type: String}
    }
  ],
  weapons: [
    {
      name: {type: String},
      damageDie: {type: String}
    }
  ]
});

const Character = mongoose.model('Character', characterSchema);

module.exports = {
  Character = Character,
}