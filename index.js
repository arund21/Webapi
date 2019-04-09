//require express
var express = require('express');

//instance of app
var myapp = express();
var path = require('path');

myapp.use(express.static(
	path.join(__dirname,'resources')
	));

myapp.set('views',__dirname+'/views');
myapp.set('view engine','ejs');

// console.log(process.env.PORT);
 myapp.get('/admin/login',function(req,res)
 {
 	res.render('backend/login');
 })

//   myapp.get('/initial',function(req,res)
//  {
//  	res.jason({
//  		"hotelname" : "test",
//  		"location"  : "kathmandu"
//  	})
//  })
 myapp.listen(process.env.PORT);