
const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/blue.html');
    app.use(express.static('.'));

});



app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});