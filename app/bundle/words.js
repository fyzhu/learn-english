'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getWords = getWords;

var _jsonp = require('./jsonp');

var _jsonp2 = _interopRequireDefault(_jsonp);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getWords() {
    var url = 'https://ec.ef.com.cn/services/school/studytools/notebook/word/LoadWordListV2/';

    var data = Object.assign({}, _config.commonParams, {
        wordGroup_id: '912'

    });

    return (0, _jsonp2.default)(url, data, _config.options);
}