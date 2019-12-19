var pointers = [5, 6, 10, 9, 4, 5, 8, 2, 3, 9];

// print all the elements of the array on new line
pointers.forEach(function (element) {
    console.log(element);
});

console.log('***********odds*****************');
// print all odd elements of the array on new line
pointers.forEach(function (element) {
    if (element % 2) {
        console.log(element);
    }
});

console.log('********** odd filtered elements ***************');
// get a new array of odd elements from the pointers array (filtering)
var odds = pointers.filter(function (element) {
    return element % 2;
});
console.log(odds);

console.log('********** evens more than 5 *******************');
var evens = pointers.filter(function (element) {
    return (!(element % 2) && element > 5);
});
console.log(evens);

// get a new array of marks deducted by 1 from pointers array (mapping)
console.log('********** marks deducted by 1 *****************');
var deductedMarks = pointers.map(function (element) {
    return element - 1;
});
console.log(deductedMarks);