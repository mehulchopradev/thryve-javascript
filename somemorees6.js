const s1 = {
    name: 'mehul',
    gender: 'm',
    roll: 10,
    email: 'mehul@gmail.com',
    address: {
        country: 'India',
        city: 'Mumbai',
        state: 'Maharashtra'
    }
};

/* const name = s1.name;
const gender = s1.gender;
const roll = s1.roll; */
// destructuring

const { name, gender, roll } = s1;
console.log(name);
console.log(gender);
console.log(roll);

const { address: {country, city, state } } = s1;
console.log(country);
console.log(city);
console.log(state);

const cars = ['audi', 'bmw', 'mercedes'];
const [c1, c2] = cars;
console.log(c1);
console.log(c2);

