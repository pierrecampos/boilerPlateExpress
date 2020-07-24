const express = require('express');
const routes = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

routes.get('/', homeController.homePage);
routes.post('/', homeController.postTest);

routes.get('/contact', contactController.homePage);
routes.post('/contact', contactController.homePage);

module.exports = routes;