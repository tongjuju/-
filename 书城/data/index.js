var home = require('./mock/home.json');

var detail = require('./mock/352876.json');

var dataObj = {
    "/api/index": home,
    "/api/detail": detail
}

module.exports = function(url) {
    return dataObj[url]
}