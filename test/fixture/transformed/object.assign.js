'use strict';

function renderPolygon(points) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];


    var defaults = {
        lineWidth: 1,
        strokeStyle: '#000',
        fillStyle: '#eee'
    };

    var settings = Object.assign({}, defaults, options);

    console.log(defaults);
    console.log(options);
    console.log(settings);
}

renderPolygon([[0, 0], [100, 100]], { lineWidth: 2, strokeStyle: '#aaa', fillStyle: '#000' });