const Employee = require('./Employee');

class Intern extends Employee {
  constructor(school) {
    super();
    this.school = school;
    this.role="Intern";
  }
  getSchool() {
      //User School name
    return this.school;  
  }
  getRole() {
    console.log(`The user role is ${this.role}`);
    return this.role;
  }

}
module.exports = Intern;