var s1 = {
    name: 'mehul',
    gender: 'm',
    roll: 10,
};

// in node js environmemt these attributes will not pollute the global object
// in browser envrionment these attributes will pollute the window object
var name = 'jane';
var gender = 'f';
var roll = 13;

function getDetails() {
    // console.log(this); // this -> calling object
    return 'Name: ' + this.name + '\nGender: ' + this.gender
    + '\nRoll: ' + this.roll;
}

console.log(getDetails());

// changing the context (this) in which the function is called and returning a newly created
// function
var getDetailsStudent = getDetails.bind(s1);
console.log(getDetailsStudent());

// call the function with a different context (this)
console.log(getDetails.call(s1));
// getDetails.call(s1, a, b, c) // 1. context this object 2. variable number of arguments