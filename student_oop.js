// object
var s1 = {
    name: 'mehul chopra',
    gender: 'm',
    marks: 90,
    roll: 10
};

var s2 = {
    name: 'jane',
    gender: 'f',
    marks: 98,
    roll: 13
};

console.log(typeof s1);
console.log(typeof s2);

// access attributes from an object
console.log(s1.name);
console.log(s1.roll);
console.log(s2.name);
console.log(s2.roll);

// modify attributes of an object
s1.marks = 80;
s2.roll = 12;
console.log(s1.marks);
console.log(s2.roll);

// add more attributes after an object is created
s1.email = 'mehul.chopra.dev@gmail.com';
console.log(s1.email);

// delete attributes from an object after it is created
console.log(s1);
delete s1.email;
console.log(s1);

var s3 = {
    studentName: 'jane',
    gen: 'f',
    marks: 98,
    r: 13
};