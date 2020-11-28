const express = require('express');
const app = express();
require('dotenv/config');
const PORT = process.env.PORT;
const router = require('./router');


app.use(router);

app.listen(3002, () => {
  console.log(`COEVENT listening at http://localhost:${PORT}`);
});

