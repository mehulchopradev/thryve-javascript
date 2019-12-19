var marks = 45;

/*
>=70 - A
>=60 - B
>=40 - C
< 40 - F
> 100 or < 0 - I
*/

// if - else if - else if - else
if (marks > 100 || marks < 0) {
    console.log('I');
} else if (marks >= 70) {
    console.log('A');
} else if (marks >= 60) {
    console.log('B');
} else if (marks >= 40) {
    console.log('C');
} else {
    console.log('F');
}