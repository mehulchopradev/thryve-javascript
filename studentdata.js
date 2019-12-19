var name = 'mehul';
var gender = 'm';
var roll = 10;
var marks = 90;

console.log(getDetails(name, gender, roll, marks));

function getDetails(name, gender, roll, marks) {
    return 'Name: ' + name + '\nGender: ' + gender
        + '\nRoll: ' + roll + '\nMarks: ' + marks;
}


// console.log(add(5, 4)); // will not work
var add = function (x, y) {
    return x + y;
};

// add becomes a callable variable
// name, gender, roll, marks are non callable variables
console.log(add(4, 5));
// console.log(name()); // will not work
var sum = add; // sum also becomes a callable variable
console.log(sum(4, 5));