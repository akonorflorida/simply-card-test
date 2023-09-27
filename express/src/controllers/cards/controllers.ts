import { error } from "console";
import { Request, Response } from "express";
import { generateDeck } from "../../utils/cards/utils";

export const getNewDeck = async (req: Request, res: Response ) =>{
  const timestamp = Date.now().toString();
  const randomNumber = Math.floor(Math.random() * 1000).toString();
  const deckId = timestamp + randomNumber;
  return res.json({success: true, deckId: deckId})
}


export const drawACard = async (req: Request, res: Response) =>{
  const currentDeckId = req.body.deckId;
  currentDeckId !==0 ? 
  res.json({success: true,  }) : res.json({err: error})
}




// export const saveDeck = (req: Request, res: Response) =>{
//   const timestamp = Date.now().toString();
//   const randomNumber = Math.floor(Math.random() * 1000).toString();
//   const deckId = timestamp + randomNumber;
//   const deck = generateDeck();
// }