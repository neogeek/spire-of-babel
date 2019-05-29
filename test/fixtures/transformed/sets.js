"use strict";

{
  var languages = new Set();
  languages.add('JavaScript');
  languages.add('Objective-C');
  languages.add('Swift');
  languages.add('Swift');
  console.log(languages.size);
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
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
{
  var language1 = {
    'name': 'JavaScript'
  };

  var _languages = new WeakSet();

  _languages.add(language1);

  console.log(_languages.has(language1));
  console.log(_languages["delete"](language1));
  console.log(_languages.has(language1));
}