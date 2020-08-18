const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()


const PORT = process.env.PORT || 9000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const mongo = process.env.MONGODB_URI
mongoose.connect(mongo)

// routes
require("./routes/api-route.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
