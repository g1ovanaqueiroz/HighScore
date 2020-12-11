const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('../controllers/authController')(app);

app.listen(8099, function(){
  console.log('server on...')
});