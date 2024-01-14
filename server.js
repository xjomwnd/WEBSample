const express = require('express');
const app = express();

/* ******************************************
 * Default GET route
 * ***************************************** */

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Other routes may be defined here..

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
