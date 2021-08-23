const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name,id,email,gitHub) {
    super(name,id,email);
    this.gitHub = gitHub;
    this.role="Engineer";
  }

  getGithub() {
      //User gitHub name
    return this.gitHub;  
  }
  getRole() {
    console.log(`The user role is ${this.role}`);
    return this.role;
  }

}
module.exports = Engineer;