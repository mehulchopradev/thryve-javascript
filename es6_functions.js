function perimeter(length = 3, breadth = 2) {
    return length * breadth;
}

console.log(perimeter(4, 3));
console.log(perimeter(6));
console.log(perimeter());
console.log(perimeter(undefined, 1.5));

function add(x, y) {
    return x + y;
}

var add = function (x, y) {
    return x + y;
};
var add = (x, y) => x + y;
console.log(add(5, 3));
console.log(typeof add);

const pointers = [5, 6, 10, 9, 4, 5, 8, 2, 3, 9];
const odds = pointers.filter(element => (element % 2) && element > 5);
console.log(odds);

const deductedMarks = pointers.map(element => element - 2);
console.log(deductedMarks);


function myAdd(...args) {
    // console.log(args); // array object that packs the variable number of arguments passed to method
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }

    return sum;
}

console.log(myAdd());
console.log(myAdd(5, 6, 7));