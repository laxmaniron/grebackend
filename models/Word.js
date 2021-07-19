const config = require("config");
const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

const GREVocabSchema = mongoose.Schema({
  wordname: {
    type: String,
    minlength: 1,
    maxlength: 511
  },
  typeofvocab: [{
    type: String,
    required: true,
    minlength: 1,
    maxlength: 512
  }],
  word_meaning: [{
    type: String,
    required: true
  }],
  word_mnemonic: {
    type: String,
  },
  word_example: [{
    type: String,
  }],
  origin_of_word: {
    type: String,
    required: true
  },
  
});

const GREVocab = new mongoose.model("grenewvocab", GREVocabSchema);



module.exports.GREVocab = GREVocab;

