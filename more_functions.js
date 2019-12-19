// 0 to n arguments  (variable number of arguments)
function myAdd() {
    // console.log(arguments); // object that packs all the parameters passed to the method
    // it has the length property also
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

console.log(myAdd());
console.log(myAdd(4));
console.log(myAdd(6, 6, 4, 2));
console.log(myAdd(56, 6, 4, 5, 6, 2, 3, 3));