const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController')
const TableController = require('./controllers/TableController');
const BookingController = require('./controllers/BookingController');
const DashboardController = require('./controllers/DashboadController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/tables', TableController.index); 
routes.post('/tables', upload.single('thumbnail'), TableController.store); 

routes.get('/dashboard', DashboardController.show); 

routes.post('/tables/:table_id/bookings', BookingController.store); 

module.exports = routes;