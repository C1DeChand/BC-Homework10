// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {

        super("Cam", 1, "fuck@thisshit.com")

        this.github = github

    }

    getGithub (github) {
        return `${this.github}`
    }

    getRole () {
        return `Engineer`
    }
    
}

  module.exports = Engineer;