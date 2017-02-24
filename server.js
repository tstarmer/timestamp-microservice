var express = require('express');
var app = express();

var moment = require('moment');


// var unixRegEx = / /;
// var naturalRegEx= / /;
var cleanSpaces = /%20/g;

app.get('/', function(req,res){
  res.send("App is running enter a date into the address bar 4");
});

app.get('/test', function(req,res){
  res.send("test");  
  
})


/*Unix time*/
app.get("/1450137600", function(req, res){
 
    var time = parseInt(req.path.substr(1));
    var date = new Date(time*1000);
    var unixTime = time;
    var naturalTime = date.toDateString().substr(4);
 
//  console.log(date);
 
//  console.log(time);
  
    var output = {
      "unix": unixTime,
      "natural": naturalTime
    }
    
    /*{ "unix": 1450137600, "natural": "December 15, 2015" }*/
    res.send(output); 
  
  
})


// natural date
app.get("/December%2015,%202015", function(req, res){
 
    var time = req.path.substr(1);//trim the /
        console.log(time)
        // "December 15, 2015"
    var cleanDate = time.replace(cleanSpaces, " ")
        console.log(cleanDate)
        
    var date = new Date(cleanDate);
    
    console.log(date);
    
    var unixTime = date.getTime()/1000;
    var naturalTime = date.toDateString().substr(4);
 
    var output = {
      "unix": unixTime,
      "natural": naturalTime
    }
    
    /*{ "unix": 1450137600, "natural": "December 15, 2015" }*/
    res.send(output); 
  
  
})


// app.get('/*', function(req,res){
//   res.send(req.path);  
  
// })


/*Using Moment.js*/
app.get('/*', function(req,res){
  // check if valid
  var reqTime = req.path.substr(1);//trim the /
  
  console.log(moment.unix(reqTime))
  //not catching the unix
  //not catching spaces
  if(moment(reqTime).isValid()){
    
    // var parsedTime = moment(reqTime);
    
    //build output
    var unixTime = moment(reqTime).format("X");
    var naturalTime = moment(reqTime).format("MMMM DD, YYYY");  
    
    
    var output = {
      "unix": unixTime,
      "natural": naturalTime
    }
    
    res.send(output);
  }
  // not valid send nul
  
  res.send("not valid", null)
})


app.listen(process.env.PORT || 8080, function(){
  console.log('Example app listening on port ', process.env.PORT)
})

/*app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})*/