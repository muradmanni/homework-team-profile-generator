const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Intern with all correct details", () => {
        //Arrange
        answers={
            empName: 'Murad',
            empId: '03',
            empEmail: 'murad.manni@gmail.com',
            school: 'CSU',
            empType: 'Intern'
          }
        
        //Action
        const testIntern = new Intern(answers.empId, answers.empName, answers.empEmail, answers.school);
        
        //Assert
        expect(testIntern.getName()).toEqual(answers.empName);
        expect(testIntern.getId()).toEqual(answers.empId);
        expect(testIntern.getEmail()).toEqual(answers.empEmail);
        expect(testIntern.getSchool()).toEqual(answers.school);
    })
});

describe("Intern with Errors", () => {
    it("Intern with blank school value", () => {
        //Arrange
        const testIntern = new Intern(16, "Murad", "murad.manni@gmail.com", "");
        const empType=testIntern.getRole();
        const err = empType + "'s school cannot be blank";
        
        //Action
        const cb= testIntern.checkSchool('');
        
        //Assert
        expect(cb).toEqual(err);
    })
});
