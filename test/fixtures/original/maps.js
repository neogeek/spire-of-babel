{

    const user1 = {
        'isAdmin': false,
        'name': 'Scott'
    };

    const user2 = {
        'isAdmin': false,
        'name': 'Eric'
    };

    const totalReplies = new Map();

    totalReplies.set(user1, 1);
    totalReplies.set(user2, 2);

    console.log(totalReplies.get(user1));
    console.log(totalReplies.get(user2));

    for (const [
        key,
        value
    ] of totalReplies) {

        console.log(`${key} = ${value}`);

    }

}

{

    const user1 = {
        'isAdmin': false,
        'name': 'Scott'
    };

    const totalReplies = new WeakMap();

    totalReplies.set(user1, 1);

    console.log(totalReplies.has(user1));
    console.log(totalReplies.delete(user1));
    console.log(totalReplies.has(user1));

}
