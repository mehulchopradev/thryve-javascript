var x = 10; // scope is global (entire file)
var y = 11; // scope is global
var z = 13;

function abc() {
    console.log(x) // can access the enclosing variables in global scope

    y = 12; // ends up modifying the global variable (avoid it)
    console.log(y); // 12

    var z = 34; // scope is abc()
    console.log(z); // 34
}

abc();
console.log(y); // 12
console.log(z); // 13

// scope of variable in javascript is either the function scope
// or the global (entire file)
// Unlike java, scope of variables in javascript is never the block scoped
// if-else, loops do not create a scope