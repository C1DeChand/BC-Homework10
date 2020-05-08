// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {

        super("Cam", 1, "fuck@thisshit.com")

        this.school = school

    }

    getSchool (school) {
        return `${this.school}`
    }

    getRole () {
        return `Intern`
    }
    
}

  module.exports = Intern;