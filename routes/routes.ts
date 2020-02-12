import * as express from "express"; 

import DB from "..models/models"

const router = express.Router();

router.get("/api/leagues", async (req,res) => {
   try { let leagues = await DB.leagues.all(); 
   res.json(leagues)
   }
   catch (e) {
       console.log(e); 
       res.sendStatus(500);
   }
})

export default router; 

