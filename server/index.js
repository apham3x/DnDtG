const express = require('express');
const app = express();
const compression = require('compression');
const port = 8080;

app.use(compression());
app.use(express.json());
app.use('/', express.static('public'));
app.use('/dist/bundle.js', express.static('dist/bundle.js'));

app.listen(port, () => {
  console.log(`You rolled a die and landed on ${port}. ..What kind of die are you rolling?`)
});