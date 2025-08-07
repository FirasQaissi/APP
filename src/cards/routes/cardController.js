const express = require("express");
const app = express();
const chalk = require("chalk");
const { getCards,getMyCards,getCard,createCard,updateCard,likeCard,deleteCard } = require("../servecis/cardsService");
const router = express.Router();
app.use(express.json());




router.get("/my-cards", async (req, res) => {
    try {
        const userId = "Hello hackerU"; 
        const cards = await getMyCards(userId);
        return res.send(cards);
    } catch (error) {
        handleError(res, error.status || 500, error.message     );
    }
});



router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const card = await getCard(id);
        res.send(`Hello From Cards ${card}`);
        
    } catch (error) {
        handleError(res, error.status || 500, error.message);
        
    }
}); 


router.get("/", async (req, res) => {
    try {
        const card = await createCard(req.body);
        res.send(card);
    } catch (error) {
        handleError(res, error.status || 500, error.message);
    }
})



router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const card = await updateCard(id, req.body);
        res.send(`Card Updated: ${card}`);
    } catch (error) {
        handleError(res, error.status || 500, error.message);
    }
});


router.patch("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const userId = "123456"; 
        const card = await likeCard(id, userId);
        res.send(`Card Liked: ${card}`);
    } catch (error) {
        handleError(res, error.status || 500, error.message);
    }
});



router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const card = await deleteCard(id);
        res.send(`Card Deleted: ${card}`);
    } catch (error) {
        handleError(res, error.status || 500, error.message);
    }
})


module.exports = router;
