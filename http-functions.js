var https = require('https');

module.exports = function getHTML(options, callback){

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
