// abc (entire file) -> function object
function abc () {
    var i = 9; // i (abc)

    // defined a function inside another function
    function xyz () { // xyz (abc) -> function object
        var j = 10; // j (xyz)

        // inner function can access enclosing function variables
        // closures
        return i + j;
    }

    console.log(xyz());
    console.log(i);
}

abc();
// xyz(); // it does not work

// pqr (global) -> function object
function pqr(i) {
    // mno (pqr) -> function object
    function mno (j) {
        return i + j + 10;
    }

    // return a function from another function
    return mno;
}

var p = pqr(13);
// p is callable
// p (entire file)
// p -> function object
console.log(p(6));

function rty(fn) {
    var i = 10;

    // fn callable function parameter
    // a function can be passed as a parameter to another function
    // callback functions
    var j = fn(i);
    return j * 2;
}

function my(r) {
    return r + 20;
}

console.log(rty(my));

console.log(rty(function (t) {
    return t + 30;
}));
