const express = require("express");

const bodyParser = require('body-parser');

const app = express();
const books = require('./routes/books');

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

// Route buku
app.use(books);

app.listen(3000, () => {
  console.log("Server udah jalan nih!");
});
