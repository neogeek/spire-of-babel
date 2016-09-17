'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

{

    var user1 = {
        'isAdmin': false,
        'name': 'Scott'
    };

    var user2 = {
        'isAdmin': false,
        'name': 'Eric'
    };

    var totalReplies = new Map();

    totalReplies.set(user1, 1);
    totalReplies.set(user2, 2);

    console.log(totalReplies.get(user1));
    console.log(totalReplies.get(user2));

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = totalReplies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2);

            var key = _step$value[0];
            var value = _step$value[1];


            console.log(key + ' = ' + value);
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
}

{

    var _user = {
        'isAdmin': false,
        'name': 'Scott'
    };

    var _totalReplies = new WeakMap();

    _totalReplies.set(_user, 1);

    console.log(_totalReplies.has(_user));
    console.log(_totalReplies.delete(_user));
    console.log(_totalReplies.has(_user));
}
