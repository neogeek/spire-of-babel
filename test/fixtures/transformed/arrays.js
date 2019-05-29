"use strict";

var languages = ['JavaScript', 'HTML', 'CSS'];
{
  var a = languages[0],
      b = languages[1],
      c = languages[2];
  console.log(a, b, c);
}
{
  var _a = languages[0],
      _c = languages[2];
  console.log(_a, _c);
}
{
  var first = languages[0],
      remaining = languages.slice(1);
  console.log(first, remaining);
}

for (var _i = 0, _languages = languages; _i < _languages.length; _i++) {
  var language = _languages[_i];
  console.log(language);
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