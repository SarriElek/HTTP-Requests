var https = require('https');

function getHTML(options, callback){

  https.get(options, (response) => {
    response.setEncoding('utf-8');
    var responseString = "";

    response.on('data', (data) => {
      responseString += data;
    })

    response.on('end', () => {
      callback(responseString);
    });

  });
}

function printHTML(html){
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);