class CollegeUser {
    constructor(name, gender) {
        // this - Student, Professor, any sub class object of CollegeUser
        this.name = name;
        this.gender = gender;
    }

    getDetails() {
        // this - current object Student, Professor, any sub class object of CollegeUser
        return `Name: ${this.name}\nGender: ${this.gender}`;
    }
}


class Student extends CollegeUser {
    constructor(name, gender, roll) {
        super(name, gender); // child class constructor must compulsorily call super
        // call to super must be the first statement
        this.roll = roll;
    }

    // overriden method (Method overriding)
    getDetails() {
        const part1 = super.getDetails();
        // useful for calling super class method from a class where the super class method
        // is overriden

        const part2 = `\nRoll: ${this.roll}`;
        return `${part1}${part2}`;
    }
}


class Professor extends CollegeUser {
    constructor(name, gender, subjects) {
        super(name, gender);
        this.subjects = subjects;
    }
}

const s1 = new Student('mehul', 'm', 10);
const p1 = new Professor('jane', 'f', ['Physics', 'Chemistry']);

console.log(s1.getDetails());
console.log(p1.getDetails());