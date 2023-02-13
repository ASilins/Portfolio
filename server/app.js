const express = require("express");
import controller from "./controller";


const app = express();
app.use("/", controller);

app.listen(5000, () => { console.log("Server started on port 5000") })