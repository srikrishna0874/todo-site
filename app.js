const express = require("express");
const path=require("path");
const app = express();

app.use("/public", express.static("public"));


app.use(require("./routes/index.js"));


app.listen(3000, () => {
    console.log('server is running');
});