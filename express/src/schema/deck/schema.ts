import mongoose from "mongoose";
import { mongo } from "../../config/mongo/config";
import { generateDeck } from '../../utils/cards/utils';


const deckSchema = new mongoose.Schema({
  deck: [{String}]
})


const Deck = mongo.model('Deck', deckSchema);

const deck = new Deck([generateDeck]);
await deck.save();

await Deck.find();





// const cardSchema = new mongoose.Schema({
//   code: String,
//   value: String,
//   suit: String
// })

// const cards = mongoose.model('Cards', cardSchema)



