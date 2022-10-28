// Dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
// module scaffolding
const module = {};

module.handleReqRes = (req, res) => {
    // Request Handle
    // Get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    // console.log(parsedUrl);
    const path = parsedUrl.pathname;
    // console.log(path);
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    // console.log(trimmedPath);
    const method = req.method.toLowerCase();
    // console.log(method);
    const queryStringObject = parsedUrl.query;
    // console.log(queryStringObject);
    const headersObject = req.headers;
    // console.log(headersObject);
    const decoder = new StringDecoder('utf-8');
    let realData = '';
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
    });

    // Sending a response
    res.end('Hello Programmer ');
};
module.exports = module;
