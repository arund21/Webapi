//require express
var express = require('express');

//instance of app
var myapp = express();

myapp.set('xyz','test');
myapp.set('views',__dirname+'/views');
myapp.set('view engine','ejs');

myapp.get('xyz')

// console.log(process.env.PORT);
 myapp.get('/',function(req,res)
 {
 	res.render('index')
 })

//   myapp.get('/initial',function(req,res)
//  {
//  	res.jason({
//  		"hotelname" : "test",
//  		"location"  : "kathmandu"
//  	})
//  })
 myapp.listen(process.env.PORT);