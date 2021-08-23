const Intern = require("../lib/Intern");

describe("Intern", () => {
    // Test for all use cases when initializing a new Child object
    describe("Initialization", () => {
      it("should create an object with a name and age if provided valid arguments", () => {
        const eng = new Intern("JobBdfa", 5, "ben@hotmail.com","UWA");
  
        // Verify that the new object has the correct properties
        expect(eng.school).toEqual("UWA");
        expect(eng.role).toEqual("Intern");
      });

        //Test get Name Methods
        describe("gitSchool Method", () => {
            it("Get the School name", () => {
                const emp = new Intern("JobBdfa", 5, "ben@hotmail.com","UWA");
                expect(emp.getSchool()).toEqual("UWA");
            });
          });
           //Test get Role Methods
          describe("getRole Method", () => {
            it("Get the Role", () => {
                const emp = new Intern("UWAT");
                expect(emp.getRole()).toBe("Intern");
            });
          });
    });
});