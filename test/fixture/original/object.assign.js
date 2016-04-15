function renderPolygon (points, options = {}) {

    let defaults = {
        lineWidth: 1,
        strokeStyle: '#000',
        fillStyle: '#eee'
    };

    let settings = Object.assign({}, defaults, options);

    console.log(defaults);
    console.log(options);
    console.log(settings);

}

renderPolygon([[0, 0], [100, 100]], { lineWidth: 2, strokeStyle: '#aaa', fillStyle: '#000' });
