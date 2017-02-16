var express = require('express')
var app = express()

var unixRegEx = / /;
var naturalRegEx= / /;
var cleanSpaces = /%20/g;

app.get('/', function(req,res){
  res.send("App is running enter a date into the address bar 4")
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


app.get('/*', function(req,res){
  res.send(req.path);  
  
})


// app.get('/*', function (req, res) {
//   res.send(req);
//   /*check req*/
//   /*create new output*/
//   var time = Date.parse(req.path);
//   if(time){
//     /*Time is valid*/
//     var unixTime = time.getTime();/*to unix*/
//     var naturalTime = time.toDateString(); /*to natural*/
        
//         console.log("unix time", unixTime);
//         console.log("natural time", naturalTime);
        
//     var output = {
//       "unix": unixTime,
//       "natural": naturalTime
//     }
//     /*{ "unix": 1450137600, "natural": "December 15, 2015" }*/
//     // console.log(JSON.stringify(output));
//     res.send(output);  
//   }
  
//   res.send(null);
  
// })

app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})