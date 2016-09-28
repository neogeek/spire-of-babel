'use strict';

{

    var firstName = 'Scott';
    var lastName = 'Doxey';

    var user = {
        firstName: firstName,
        lastName: lastName
    };

    console.log(user);
}

{

    var _user = {
        'firstName': 'Scott',
        'lastName': 'Doxey'
    };

    var _firstName = _user.firstName;
    var _lastName = _user.lastName;


    console.log(_firstName);
    console.log(_lastName);
}

var renderPolygon = function renderPolygon(points) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    var defaults = {
        'fillStyle': '#eee',
        'lineWidth': 1,
        'strokeStyle': '#000'
    };

    var settings = Object.assign({}, defaults, options);

    console.log(defaults);
    console.log(options);
    console.log(settings);
};

renderPolygon([[0, 0], [100, 100]], {
    'fillStyle': '#000',
    'lineWidth': 2,
    'strokeStyle': '#aaa'
});
