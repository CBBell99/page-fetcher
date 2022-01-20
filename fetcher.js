

const request = require('request');
const fs = require('fs');

const website = process.argv[2];
const path = process.argv[3];
// const content = 'Some content!';

request(website, (error, response, content) => {
  if (error) {
    console.log('error: ', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the error if one occurred
    return;
  }
  // console.log(body)
  fs.writeFile(path, content, error => {
    if (error) {
      console.error(error);
      console.log('PATH NOT FOUND');
      return;
    }
    console.log(`Downloaded and saved ${content.length} bytes to ${path}`);
  });
});


