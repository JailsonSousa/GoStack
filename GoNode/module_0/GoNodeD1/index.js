const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser');
const moment = require('moment');

const app = express();
app.listen(3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'njk');
app.set('views', path.join(__dirname, 'views'));

nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

app.get('/', (req, res) => {
  res.render('main');
});

const middleware = (req, res, next) => {
  const { name } = req.query;
  if (!name) res.redirect('/');
  else next();
};

app.post('/check', (req, res) => {
  const { username, bdate } = req.body;
  const age = moment().diff(
    moment(
      bdate
        .split('-')
        .reverse()
        .join('/'),
      'DD/MM/YYYY',
    ),
    'years',
  );
  if (age >= 18) res.redirect(`/major?name=${username}`);
  else res.redirect(`/minor?name=${username}`);
});

app.get('/major', middleware, (req, res) => {
  res.render('major', { name: req.query.name });
});

app.get('/minor', middleware, (req, res) => {
  res.render('minor', { name: req.query.name });
});
