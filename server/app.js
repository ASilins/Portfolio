const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const projects = require("./routes/projects");
const labs = require("./routes/labs");
const showcase = require("./routes/showcase");
const tech = require("./routes/tech");

const app = express();
app.use(cors());

// Connection to database

const uri = "mongodb+srv://cpanel:Vc3qFbXCEOjoc60k@main.dvfnmax.mongodb.net/portfolio?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to DB'));

// Middleware

app.use("/api/projects", projects);
app.use("/api/labs", labs);
app.use("/api/showcase", showcase);
app.use("/api/tech", tech);

app.use(express.json());
app.use(cookieParser());

// App listen

app.listen()