const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        
        howdy(name, id, email);

        this.school = school;
    }

    getschool() {
        return "School";
    }
    
    getRole() {
        return "Intern";
    }
}

    module.exports = Intern;