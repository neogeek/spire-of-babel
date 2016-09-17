'use strict';

var languages = ['JavaScript', 'HTML', 'CSS'];

{
    var a = languages[0];
    var b = languages[1];
    var c = languages[2];


    console.log(a, b, c);
}

{
    var _a = languages[0];
    var _c = languages[2];


    console.log(_a, _c);
}

{
    var first = languages[0];
    var remaining = languages.slice(1);


    console.log(first, remaining);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = languages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var language = _step.value;


        console.log(language);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var moreLanguages = [{
    'name': 'Java',
    'version': 8
}, {
    'name': 'Python',
    'version': 3
}, {
    'name': 'Ruby',
    'version': 2
}];

console.log(moreLanguages.find(function (language) {
    return language.version > 1;
}));
