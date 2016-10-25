# node-web-scraper-for-Whear
Node web scraper I built to pull data from a website that did not have an API. 

To run the web scraper, start the server via 

```javascript
node serverRecursive.js
```
and then go to ```localhost:8081/scrape``` in your web browser. The program will output the data in a new file called "output.js".
This web scraper is capable of scraping multiple pages, and avoids getting blocked by the host for multiple requests due to a ```setTimeout``` that gets called recursively.

The "urlPageMaker.js" file creates a json file that creates and stores the pages for the site to be scraped. That file is required into the main "serverRecursive.js" file and fed into the ```theLoop``` function.



