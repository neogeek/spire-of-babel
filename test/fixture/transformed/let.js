'use strict';

/* eslint id-length: 0 */
/* eslint no-shadow: 0 */
/* eslint no-undef: 0 */
/* eslint no-undefined: 0 */
/* eslint prefer-const: 0 */

var greeting = 'Hello, friend.';

greeting = 'Hello, friend?';

console.log(greeting);

{

    var _greeting = 'Hello, world.';

    console.log(_greeting);
}

for (var _i = 0; _i < 10; _i += 1) {

    console.log(_i);
}

console.log(i === undefined);
