const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("Manager with all correct details", () => {
        //Arrange
        answers={
            empName: 'Nazish',
            empId: '02',
            empEmail: 'nazsih@gmail.com',
            officeNumber: '0452411269',
            empType: 'Manager'
          }
        
        //Action
        const testManager = new Manager(answers.empId, answers.empName, answers.empEmail, answers.officeNumber);
        
        //Assert
        expect(testManager.getName()).toEqual(answers.empName);
        expect(testManager.getId()).toEqual(answers.empId);
        expect(testManager.getEmail()).toEqual(answers.empEmail);
        expect(testManager.getOfficeNumber()).toEqual(answers.officeNumber);
    })
});

describe("Manager with Errors", () => {
    it("Manager with string office number", () => {
        //Arrange
        const testManager = new Manager(16, "Murad", "murad.manni@gmail.com", "adsdas");
        const err = "Office Number cannot contain anything other then Number";
        
        //Action
        const cb= testManager.checkOfficeNumber('asdsdas');
        
        //Assert
        expect(cb).toEqual(err);
    })

    it("Manager with string office number", () => {
        //Arrange
        const testManager = new Manager(16, "Murad", "murad.manni@gmail.com", "");
        const err = "Office number cannot be blank";
        
        //Action
        const cb= testManager.checkOfficeNumber('');
        
        //Assert
        expect(cb).toEqual(err);
    })
    
    
});
