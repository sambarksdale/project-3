const express = require('express');
const app = express();

app.use(express.json())
app.use(require('./router'));

app.use(express.static(__dirname + '/client/build/'));
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("connected at: " + PORT)
});