const express = require('express');
const app = express();
require('dotenv/config');
const PORT = process.env.PORT;

console.log('PORT-->', PORT);



app.listen(PORT, () => {
  console.log(`COEVENT listening at http://localhost:${PORT}`);
});

