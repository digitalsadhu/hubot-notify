'use strict';

var request = require('request')

module.exports = function (url) {
  return function notify(message) {
    request.get(url + '=' + message, function () {
      console.log('[INFO]', 'message', message, 'sent to chatroom')
    })
  }
}
