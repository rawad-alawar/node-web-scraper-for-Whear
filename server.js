var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var sitePages = require('./sitePages.json')


//for (var i=0; i<sitePages.length; i++){}
app.get('/scrape', function(req, res){
  var json = { brands : [] };

  //url = "https://en.wikipedia.org/w/index.php?title=Category:Clothing_brands_of_the_United_States&pagefrom=Rag+and+bone%0ARag+and+Bone#mw-pages";
  // for (var page in sitePages){
  for (var i=0; i<10;i++){
    url = sitePages[i];


    request(url, (function(i) { return function(error, response, html){

      if(!error){
        var $ = cheerio.load(html);

        var brand, logo;


        $('.logos>li').each(function(index){
          var data = $(this);
          console.log(data['0'].children[3].children[0].data);
          console.log(data['0'].children[1].children[0].children[0].attribs.src);
          brand = data['0'].children[3].children[0].data;
          if (data['0'].children[1].children[0].children[0].attribs.src==undefined){
            logo = "";
          }else{
          logo = data['0'].children[1].children[0].children[0].attribs.src;
          }
          json.brands.push({name: brand, logoURL: logo});
        })
      };
    }})(i));
    //break;
  }
  //had to use setTimeout because above is asynchrounous and we need above data to write
  setTimeout(function() {fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
    console.log('File successfully written! - Check your project directory for the output.json file');
  })}, 10000)

  res.send('scrape')

})


app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;
