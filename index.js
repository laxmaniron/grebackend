const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Joi = require("@hapi/joi");
var cors = require('cors');

const app = express();

const wordinfo = require("./routes/api/words");


//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors()) 


//DB config

//Connect to MongoDB
mongoose.set("useFindAndModify", false);



// "mongodb://localhost:27017/GREnew" 
mongoose
  .connect("myuri", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }) // only in development environment
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB....", err));


// Use Routes
app.use("/api/words", wordinfo);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}`));
