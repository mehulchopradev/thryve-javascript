var x = 10;

// if - else
if (x % 2) { // expression can evaluate to true or truthy
    var ans = 'Odd'; // entire file
} else {
    var ans = 'Even'; // entire file
}

console.log(ans);

// ternary operator
// understands javascript truthy and falsy
var msg = x % 2 ? 'Odd' : 'Even';
console.log(msg);

var username = 'mehul25';
//var greeting = username ? 'Welcome ' + username : 'Welcome Guest';
var greeting = 'Welcome ' + (username || 'guest');
console.log(greeting);