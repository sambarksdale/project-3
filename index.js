const express = require('express');
const app = express();

app.use(express.json())
app.use(require('./router'));

// app.get('/', (req,res) => {
//     res.send("the server is up")
// })

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("connected at: " + PORT)
});