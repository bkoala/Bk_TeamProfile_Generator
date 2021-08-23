const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name,id,email,school) {
    super(name,id,email);
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