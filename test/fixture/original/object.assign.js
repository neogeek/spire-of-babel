const renderPolygon = (points, options = {}) => {

    const defaults = {
        'lineWidth': 1,
        'strokeStyle': '#000',
        'fillStyle': '#eee'
    };

    const settings = Object.assign({}, defaults, options);

    console.log(defaults);
    console.log(options);
    console.log(settings);

};

renderPolygon([[0, 0], [100, 100]], {
    'lineWidth': 2,
    'strokeStyle': '#aaa',
    'fillStyle': '#000'
});
