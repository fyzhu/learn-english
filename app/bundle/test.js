"use strict";

var _words = require("./words");

var _words2 = _interopRequireDefault(_words);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _words2.default)().then(function (res) {
    console.log(res);
}, function (error) {
    console.log(error);
});

// console.log('test');