const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const projects = require("./routes/projects");

const uri = "mongodb+srv://Asilins:8DUwGUQl7hf1KdZe@portfolio.hhwbglx.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to DB'));

const app = express();
app.use("/api/projects", projects);
app.use(express.json());
app.use(cookieParser());

app.listen(5000, () => { console.log("Server started on port 5000") })