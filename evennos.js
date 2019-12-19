var n = 15;

// var i = 0;

// while loop
/* while (i <= n) { // condition understands javascript truthy and falsy
    if (!(i % 2)) {
        console.log(i);
    }
    i += 1;
} */

for (var i = 0; i <= n; i = i + 2) {
    console.log(i);
}
console.log(i); // the final value will be printed