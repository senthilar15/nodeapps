const express = require('express');
const  hbs = require('express-handlebars').create({defaultLayout:'main.hbs'});
const path = require('path');
const fs = require("fs");
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require("express-session");
const app = express();

app.use('/examples',require('./router/router'));
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
//route serves both the form page and processes form data
app.get('/', (request, response)=>{
    console.log(request.query);
   // response.sendFile(__dirname +'/form.html');
   response.render('home',{title: 'Home'});
  });

app.listen(3000,()=>console.log('Express server started at port 3000'));