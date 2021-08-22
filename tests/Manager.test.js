const Manager = require("../lib/Manager");

describe("Manager", () => {
    // Test for all use cases when initializing a new Child object
    describe("Initialization", () => {
      it("should create an object with a name  if provided valid arguments", () => {
        const eng = new Manager(5);
  
        // Verify that the new object has the correct properties
        expect(eng.officeNumber).toEqual(5);
        expect(eng.role).toEqual("Manager");
      });
    });
});