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
      //Test get Name Methods
      describe("gitHub Method", () => {
        it("Get the gitHub name", () => {
            const emp = new Engineer("bSmith");
            expect(emp.getGithub()).toBe("bSmith");
        });
      });
       //Test get Role Methods
      describe("getRole Method", () => {
        it("Get the Role", () => {
            const emp = new Engineer("bSmith");
            expect(emp.getRole()).toBe("Engineer");
        });
      });

    });
});
