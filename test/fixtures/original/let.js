/* eslint id-length: 0 */
/* eslint no-shadow: 0 */
/* eslint no-undef: 0 */
/* eslint no-undefined: 0 */
/* eslint prefer-const: 0 */

let greeting = 'Hello, friend.';

greeting = 'Hello, friend?';

console.log(greeting);

{
    let greeting = 'Hello, world.';

    console.log(greeting);
}

for (let i = 0; i < 10; i += 1) {
    console.log(i);
}

console.log(i === undefined);
