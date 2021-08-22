const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    // Test for all use cases when initializing a new Child object
    describe("Initialization", () => {
      it("should create an object with a name and age if provided valid arguments", () => {
        const eng = new Engineer("bkola");
  
        // Verify that the new object has the correct properties
        expect(eng.gitHub).toEqual("bkola");
        expect(eng.role).toEqual("Engineer");
      });
    });
});
