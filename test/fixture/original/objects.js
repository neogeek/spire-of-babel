{

    const firstName = 'Scott';
    const lastName = 'Doxey';

    const user = {
        firstName,
        lastName
    };

    console.log(user);

}

{

    const user = {
        'firstName': 'Scott',
        'lastName': 'Doxey'
    };

    const {firstName, lastName} = user;

    console.log(firstName);
    console.log(lastName);

}

const renderPolygon = (points, options = {}) => {

    const defaults = {
        'fillStyle': '#eee',
        'lineWidth': 1,
        'strokeStyle': '#000'
    };

    const settings = Object.assign({}, defaults, options);

    console.log(defaults);
    console.log(options);
    console.log(settings);

};

renderPolygon([[0, 0], [100, 100]], {
    'fillStyle': '#000',
    'lineWidth': 2,
    'strokeStyle': '#aaa'
});
