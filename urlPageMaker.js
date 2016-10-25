var fs      = require('fs');

var sitePages = []

for (var i=0; i<152; i++){
  sitePages[i]="http://www.brandsoftheworld.com/logos/categories/fashion?page=" + i;
}

fs.writeFile('sitePages.json', JSON.stringify(sitePages, null, 4), function(err){
  console.log('File successfully written! - Check your project directory for the sitePages.json file');
})
