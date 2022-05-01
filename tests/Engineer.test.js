const Engineer = require("../lib/Engineer");
const inquirer = require("inquirer");

describe("Engineer", () => {
    it("Engineer with all correct github", () => {
        //Arrange
        const testEngineer = new Engineer(16, "Murad", "murad.manni@gmail.com", "muradmanni");

        //Assert
        expect(testEngineer.getName()).toEqual("Murad");
        expect(testEngineer.getId()).toEqual(16);
        expect(testEngineer.getEmail()).toEqual("murad.manni@gmail.com");
        expect(testEngineer.getGithub()).toEqual("muradmanni");
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
