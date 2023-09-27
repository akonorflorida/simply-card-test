import { error } from "console";
import { Request, Response } from "express";
import { generateDeck } from "../../utils/cards/utils";
import { mongo } from "../../config/mongo/config";
import { Deck } from "../../schema/deck/schema";

export const getNewDeck = async (req: Request, res: Response ) =>{
  const newDeck = new Deck({deck: generateDeck().shuffledDeck})
  await newDeck.save();
  return res.json({success: true, deckId: newDeck._id})
}


export const drawACard = async (req: Request, res: Response) =>{
  const currentDeckId = req.body.deckId;
  const deck =  await Deck.findById(currentDeckId);
  if (!deck) {
    return res.status(400).json("No deck found") 
  } else {
    return res.json({
      success: true, 
      deckId: currentDeckId, 
      cards: [
        {
          code: deck,
          image: "https://deckofcardsapi.com/static/img/6C.png",
          images: {
              "svg": "https://deckofcardsapi.com/static/img/6C.svg",
              "png": "https://deckofcardsapi.com/static/img/6C.png"
          },
          value: "6",
          suit: "CLUBS"
      }
      ]
    
    })
  }

  {
    "success": true,
    "deck_id": "tbq449zt099o",
    "cards": [
        {
            "code": "6C",
            "image": "https://deckofcardsapi.com/static/img/6C.png",
            "images": {
                "svg": "https://deckofcardsapi.com/static/img/6C.svg",
                "png": "https://deckofcardsapi.com/static/img/6C.png"
            },
            "value": "6",
            "suit": "CLUBS"
        }
    ],
    "remaining": 44
}

  // currentDeckId !==0 ? 
  // res.json({success: true,  }) : res.json({err: error})
}




// export const saveDeck = (req: Request, res: Response) =>{
//   const timestamp = Date.now().toString();
//   const randomNumber = Math.floor(Math.random() * 1000).toString();
//   const deckId = timestamp + randomNumber;
//   const deck = generateDeck();
// }