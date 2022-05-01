const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Employee with all correct details", () => {
        //Arrange
        const testEmployee = new Employee(16, "Murad", "murad.manni@gmail.com");

        //Assert
        expect(testEmployee.getName()).toEqual("Murad");
        expect(testEmployee.getId()).toEqual(16);
        expect(testEmployee.getEmail()).toEqual("murad.manni@gmail.com");

    })
});

describe("Employee with Errors", () => {
    it("Employee id should be number", () => {
        //Arrange
        const testEmployee = new Employee("sda", "Murad", "murad.manni@gmail.com");
        const empType=testEmployee.getRole();
        const err = empType + "'s ID should be a number";
        
        //Action
        const cb= testEmployee.checkEmpId("sda");
        
        //Assert
        expect(cb).toEqual(err);
    });

    it("Employee id should be greater then 0", () => {
        //Arrange
        const testEmployee = new Employee(0, "Murad", "murad.manni@gmail.com");
        const err = "Id must be greater than 0";
        
        //Action
        const cb= testEmployee.checkEmpId(0);
        
        //Assert
        expect(cb).toEqual(err);
    });

    it("Employee Name cannot be blank", () => {
        //Arrange
        const testEmployee = new Employee(16, "", "murad.manni@gmail.com");
        const empType= testEmployee.getRole();
        const err = empType + "'s Name cannot be blank";
        
        //Action
        const cb= testEmployee.checkEmpName('');
        
        //Assert
        expect(cb).toEqual(err);
    })
});