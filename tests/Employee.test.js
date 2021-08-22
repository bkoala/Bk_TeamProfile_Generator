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
     //Test get Name Methods
     describe("getName Method", () => {
        it("Get the Name", () => {
            const emp = new Employee("Albert", 5, "ben@hotmail.com");
            expect(emp.getName()).toBe("Albert");
        });
      });
      //Test get Id Methods
     describe("getId Method", () => {
        it("Get the Id", () => {
            const emp = new Employee("Albert", 5, "ben@hotmail.com");
            expect(emp.getId()).toBe(5);
        });
      });
      //Test get Email Methods
      describe("getEmail Method", () => {
        it("Get the Email", () => {
            const emp = new Employee("Albert", 5, "ben@hotmail.com");
            expect(emp.getEmail()).toBe("ben@hotmail.com");
        });
      });
       //Test get Role Methods
     describe("getRole Method", () => {
        it("Get the Role", () => {
            const emp = new Employee("Albert", 5, "ben@hotmail.com");
            expect(emp.getRole()).toBe("Employee");
        });
      });

     });
    });