const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: 'http://localhost:3000' }));

require('../controllers/authController')(app);
require('../controllers/projectController')(app);
require('../controllers/pecaController')(app);

app.listen(8084, function(){
  console.log('server on...')
});