const Manager = require("../lib/Manager");

describe("Manager", () => {
    // Test for all use cases when initializing a new Child object
    describe("Initialization", () => {
      it("should create an object with a name  if provided valid arguments", () => {
        const eng = new Manager("JobBdfa", 5, "ben@hotmail.com",15);
  
        // Verify that the new object has the correct properties
        expect(eng.officeNumber).toEqual(15);
        expect(eng.role).toEqual("Manager");
      });
       //Test get Role Methods
      describe("getRole Method", () => {
        it("Get the Role", () => {
            const emp = new Manager("JobBdfa", 5, "ben@hotmail.com",15);
            expect(emp.getRole()).toBe("Manager");
        });
      });
 

    });
});