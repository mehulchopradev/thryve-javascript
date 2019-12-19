function Student(name, gender, roll, marks) {
    // console.log(this); // current object address
    // constructor pattern
    this.name = name;
    this.gender = gender;
    this.roll = roll;
    this.marks = marks;

    // a function object will be created for every Student object
    /* this.getDetails = function () {
        // this - hidden parameter
        // this - current object
        return 'Name: ' + this.name + '\nGender: ' + this.gender
        + '\nRoll: ' + this.roll + '\nMarks: ' + this.marks;
    }; */
}

// every javascript object has a prototype attribute
// this function since attached to the prototype attribute, will be shared
// by all Student objects
Student.prototype.getDetails = function () {
    // this - hidden parameter
    // this - current object
    return 'Name: ' + this.name + '\nGender: ' + this.gender
    + '\nRoll: ' + this.roll + '\nMarks: ' + this.marks;
};

/*
Internally
function Student(name, gender, roll, marks, this) {

    return this;
}
*/

var s1 = new Student('mehul', 'm', 10, 90);
/*
 Internally
 1. new -> 5003 (RAM)
 2. Student('mehul', 'm', 10, 90, 5003)
*/

var s2 = new Student('jane', 'f', 13, 98);
/*
 Internally
 1. new -> 6004 (RAM)
 2. Student('jane', 'f', 13, 98, 6004)
*/

console.log(s1.getDetails());
// Internally
// console.log(Student.prototype.getDetails(s1))

console.log(s2.getDetails());
// Internally
// console.log(Student.prototype.getDetails(s2))

/* console.log(typeof s1);
console.log(typeof s2);
console.log(s1);
console.log(s2);
console.log(s1.name);
console.log(s1.roll);
console.log(s2.name);
console.log(s2.roll); */