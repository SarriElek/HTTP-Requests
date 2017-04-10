var https = require('https');

function getAndPrintHTML(options){

  https.get(options, (response) => {
    response.setEncoding('utf-8');
    var responseString = "";

    response.on('data', (data) => {
      responseString += data;
    })

    response.on('end', () => {
      console.log(responseString);
    });

  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);