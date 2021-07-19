const express = require("express");
const router = express.Router();
// const multer = require("multer");
const mongoose = require("mongoose");

// const upload = multer({ dest: "dressuploads/" }).single("dresspicparse");



const {
  GREVocab
} = require("../../models/Word");

// @route   GET api/dresses/test
// @descrip Tests dresses route
// @access  Public
router.get("/test", async (req, res) => {

  const wordItems = await GREVocab.find()
  .collation({locale: "en" })
  .sort({wordname: 1});
  
  res.send({
    wordItems
  });
});

router.post("/addword", async (req, res) => {
  // console.log(req.body);
  let newword = new GREVocab({
        
      wordname: req.body.wordname,
      typeofvocab: req.body.typeofvocab,
      word_meaning:req.body.word_meaning,
      word_mnemonic:req.body.word_mnemonic,
      word_example:req.body.word_example,
      origin_of_word:req.body.origin_of_word
    
  });

  const newword_final = await newword.save();
  res.send(newword_final);
});

router.post("/deleteword", async (req, res) => {
  let wordid = req.body._id;

  wordid = mongoose.Types.ObjectId(wordid);

  deletedelement = await GREVocab.deleteOne({ _id: wordid });
  res.send(deletedelement);
});

module.exports = router;
