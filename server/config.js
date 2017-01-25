const path = require('path')
const express = require('express')
const exphbs  = require('express-handlebars');

const mongoose = require('mongoose');

module.exports = {
  app: function () {
    const app = express()
    const publicPath = express.static(path.resolve(__dirname, '../public'))

    // Defining assets configuration
    app.use('/public', publicPath)

    // Templates configuration
  app.set('views', path.resolve(__dirname, '../src/views'));
	app.engine('handlebars', exphbs({
                defaultLayout: 'main',
                layoutsDir:'src/views/layouts',
                partialsDir:'src/views/partials'
            }));
	app.set('view engine', 'handlebars');

    return app
  },

  conn_mongo: function () {
  	const mongo_url = process.env.MONGO_URL || 'mongodb://localhost:27017/mern-stack'

  	mongoose.connect(mongo_url, (error) => {
	  if (error) {
	    console.error('Please verify if Mongodb is up and running!');
	    // throw error;
	  }
	});
  }
}