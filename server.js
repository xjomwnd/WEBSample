//This is the application server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
 
const express = require("express")

const app = express()

/* ******************************************
 * Server host name and port

 * ***************************************** */
const HOST = 'localhost'
const PORT = 3000

/* ***********************
* Log statement to confirm server operation
* *********************** */
app.listen(PORT, () => {
console.log(`trial app listening on ${HOST}:${PORT}`)
})

// Other routes may be defined here...

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
