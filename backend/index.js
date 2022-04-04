const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = 8080;

const app = express();
const todoRoutes = require("./routes/todoRoutes")
/* This is a way to configure the connection to the database. */
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };

/* This creating a new express application and then registering a route for the
todoRoutes. */
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://localhost/todolist", connectionOptions)
    .then(() => console.log("connected successfully"))
    .catch((err) => console.error(err))

app.use("/todo", todoRoutes)

app.listen(PORT, () => {
    console.log("listening on port " + PORT)
})