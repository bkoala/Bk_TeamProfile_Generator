class Employee {
    constructor(name,id,email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role="Employee";
    }

getName() {
    console.log(`The employee name is ${this.name}`);
  return this.name;
}
getId() {
    console.log(`The employee ID is ${this.id}`);
  return this.id;
}
getEmail() {
    console.log(`The employee Email is ${this.email}`);
  return this.email;
}
getRole(){
  return this.role; 
}
}
  
module.exports = Employee;
  