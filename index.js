const express = require('express');
const app = express();

app.use(express.json())
app.use(require('./router'));

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("connected at: " + PORT)
});