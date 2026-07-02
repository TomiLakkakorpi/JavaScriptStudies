const express = require("express");

const app = express();

app.use("/", express.static("frontend"));

app.use(express.json());

app.post("/guess",function(req,res){
    const guess = parseInt(req.body.guess);
    const numberToGuess = 42;
    if(guess === numberToGuess) {
        return res.status(200).json({"correct":true});
    }
    else if(guess < numberToGuess) {
        return res.status(200).json({"tooLow":true});
    }
    else if(guess > numberToGuess) {
        return res.status(200).json({"tooHigh":true});
    }
});

app.listen(3000);

console.log("Server is running on port 3000");