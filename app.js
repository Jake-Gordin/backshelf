//start listening for front end via express
const express = require ('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.get('/', (req, res) => {
  res.send('Received on the live server!')
  console.log('received message')
});
app.listen(5555, () => console.log(`Listening on port 5555`));