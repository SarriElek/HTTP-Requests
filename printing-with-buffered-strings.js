var https = require('https');

function getAndPrintHTML(){

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, (response) => {
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

getAndPrintHTML();