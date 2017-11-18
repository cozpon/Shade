const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.json('Hello world!');
});

app.listen(PORT, () => {
  db.sequelize.sync({ force: true });
  console.log(`Server listening on port ${PORT}`);
});