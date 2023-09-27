import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { userRouter } from "./routers/user/router";
import { cardsRouter } from "./routers/cards/router";

// import { ICard } from '../../react/src/components/App/App';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use("/user", userRouter);
app.use("/cards", cardsRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});



// interface Card {
//   code: string;
//   image: string;
//   images: {
//     svg: string;
//     png: string;
//   };
//   value: string;
//   suit: string;
//   time: string;
// }

// const suits = ["s", "c", "d", "h"];
// const values = [
//   "A",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "T",
//   "J",
//   "Q",
//   "K",
// ];

// const deck: ICard[] = [];

// const shuffle = (array: ICard[]) => {
//   let currentIndex = array.length,
//     randomIndex;

//   // While there remain elements to shuffle.
//   while (currentIndex != 0) {
//     // Pick a remaining element.
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// };

// const shuffledDeck = shuffle(deck);

// app.get('/drawCard', (req: Request, res: Response) => {
//     if (deck.length === 0) {
//       res.status(400).json({ success: false, error: 'No more cards in the deck. Please reset the deck.' });
//       return;
//     }
  
//     const card = deck.pop();
//     res.json({ success: true, deck_id: '', cards: [card], remaining: deck.length });
//   });
  
//   app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
//   });


