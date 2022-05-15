const express = require("express");
const path = require("path")
const mongoose = require('mongoose');
var cors = require('cors')
require("dotenv").config()

const PORT = process.env.PORT || 3001;
  mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser :true})
  .then(()=>console.log('DB connected Successfully!'))
  .catch(err => console.log(err));

const app = express();
app.use(cors());

app.get('/api' , (req, res)=>{
    res.json({message: "hello from server!!!"});
});


app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});