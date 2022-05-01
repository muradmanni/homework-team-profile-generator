const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Engineer with all correct details", () => {
        //Arrange
        answers={
            empName: 'Nazish',
            empId: '02',
            empEmail: 'nazsih@gmail.com',
            github: 'muradmanni',
            empType: 'Engineer'
          }
        
        //Action
        const testEngineer = new Engineer(answers.empId, answers.empName, answers.empEmail, answers.github);
        
        //Assert
        expect(testEngineer.getName()).toEqual(answers.empName);
        expect(testEngineer.getId()).toEqual(answers.empId);
        expect(testEngineer.getEmail()).toEqual(answers.empEmail);
        expect(testEngineer.getGithub()).toEqual(answers.github);
    })
});

describe("Engineer with Errors", () => {
    it("Engineer with blank github value", () => {
        //Arrange
        const testEngineer = new Engineer(16, "Murad", "murad.manni@gmail.com", "");
        const empType=testEngineer.getRole();
        const err = empType + "'s github cannot be blank";
        
        //Action
        const cb= testEngineer.checkGithub('');
        
        //Assert
        expect(cb).toEqual(err);
    })
});
