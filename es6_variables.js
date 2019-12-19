var i = 10;
if (i % 2) {
    let msg = 'Odd'; // 'let' always creates a variable in the block scope. Scope is if
} else {
    let msg = 'Even'; // scope is 'else'
}

// console.log(msg); // this will not work as scope of msg is either the if or the else

// scope - is same like let
const s1 = {
    name: 'mehul',
    roll: 10,
};

// s1 = 'mehul'; // does not work
s1.name = 'Mehul'; // this works

const s2 = Object.freeze({
    name: 'jane',
    roll: 11,
});

s2.name = 'Jane'; // will not change the value of the name attribute
console.log(s2);