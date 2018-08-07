const express = require('express');

const routes = express.Router();

// Middlewares
const authMiddleware = require('./middlewares/auth');
const guestMiddleware = require('./middlewares/guest');

// Controllers
const authController = require('./controllers/authController');
const dashboardController = require('./controllers/dashboardController');
const projectController = require('./controllers/projectController');
const sectionController = require('./controllers/sectionController');

// Flash msg
routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');
  next();
});

// auth
routes.get('/', guestMiddleware, authController.signin);
routes.get('/signup', guestMiddleware, authController.signup);
routes.get('/signout', authController.signout);
routes.post('/register', authController.register);
routes.post('/authenticate', authController.authenticate);

// dashboard
routes.use('/app', authMiddleware);
routes.get('/app/dashboard', dashboardController.index);

// projects

routes.get('/app/projects/:id', projectController.show);
routes.post('/app/projects/create', projectController.store);
routes.delete('/app/projects/:id', projectController.destroy);

// Section
routes.get('/app/projects/:projectId/sections/:id', sectionController.show);
routes.post('/app/projects/:projectId/sections/create', sectionController.store);
routes.put('/app/projects/:projectId/sections/:id', sectionController.update);
routes.delete('/app/projects/:projectId/sections/:id', sectionController.destroy);

routes.use((_req, res) => res.render('errors/404'));

routes.use((error, _req, res, _next) => {
  res.status(error.status || 500);

  return res.render('errors/index', {
    message: error.message,
    error: process.env.NODE_ENV === 'production' ? {} : error,
  });
});

module.exports = routes;
