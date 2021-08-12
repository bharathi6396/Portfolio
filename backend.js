const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('build'));

const PORT = process.env.PORT || 9000



app.listen(PORT);