const Employee = require("../lib/Employee");

describe("Employee", () => {
    // Test for all use cases when initializing a new Child object
    describe("Initialization", () => {
      it("should create an object with a name and age if provided valid arguments", () => {
        const emp = new Employee("JobBdfa", 5, "ben@hotmail.com");
  
        // Verify that the new object has the correct properties
        expect(emp.name).toEqual("JobBdfa");
        expect(emp.id).toEqual(5);
        expect(emp.email).toEqual("ben@hotmail.com");
      });
     //Test Methods
     describe("getName Method", () => {
        it("Get the Name", () => {
            const emp = new Employee("Albert", 5, "ben@hotmail.com");
            expect(emp.getName()).toBe("Albert");
        });
      });

     });
    });