var express = require('express');
var app = express();

var moment = require('moment');

app.get('/', function(req,res){
  res.send("App is running enter a date into the address bar 4");
});

/*Using Moment.js*/
app.get('/*', function(req,res){
 
  var reqTime = req.path.substr(1);//trim the /
  var reqParam = req.params['0'].replace(/ /g,"-");

  if(moment(reqParam).isValid()){
  
    var unixTime = moment(reqParam).format("X");
    var naturalTime = moment(reqParam).format("MMMM DD, YYYY");  
   
    var output = {
      "unix": unixTime,
      "natural": naturalTime
    }
    
    res.send(output);
  }else{
    res.send("not valid")    
  }
  
})

app.listen(process.env.PORT || 8080, function(){
  console.log('Example app listening on port ', process.env.PORT)
})