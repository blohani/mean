var express = require('express');
var app = express();

app.use(express.static(__dirname));
//console.log('Hey');

app.get('/personlist', function(req,res){   
  console.log("I received the GET request..")
  //res.send("Hello from exp.js...")

  Person1 = {

		name: 'bhupesh',
		email: 'bhupesh@gmail.com',
		phone:'9322222222'
	};
	Person2 = {

		name: 'suresh',
		email: 'suresh@gmail.com',
		phone:'9322222222'
	};
	Person3 = {

		name: 'dinesh',
		email: 'dinesh@gmail.com',
		phone:'9322222222'
	};
	var personlist = [Person1,Person2,Person3];
    res.json(personlist);
    //console.log(personlist);

});

var server = app.listen(4000, function () {
    console.log('Node server is running now...');
});