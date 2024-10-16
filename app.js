const express = require("express");
const app = express();
const path=require('path');



app.use("/public", express.static("public"));



app.listen(3000, () => {
    console.log('server is running');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.post('/add_task', (req, res) => {
    console.log('body is: ');
    console.log(req.body);
});




