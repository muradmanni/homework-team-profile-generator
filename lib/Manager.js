const Employee = require('./Employee')

class Manager extends Employee{
    constructor(id, name, email, officeNumber){
        super(id, name, email );
        this.officeNumber=officeNumber;
    }

    getRole(){
        return 'Manager';
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
    
    questions(empType)
    {
        const employeeQuestions=  [
        {
            type: "input",
            message: "What is the team " +  empType + "'s office number? ",
            name: "officeNumber",
            validate: (officeNumber) => {
                if (isNaN(officeNumber))
                {return "Office Number cannot contain anything other then Number"}
                else
                {return true;}
            }
        }];
        
          return super.questions('Manager').concat(employeeQuestions);
    }

    writeValues(data){
        super.addToEmp(data);
    }
}

module.exports = Manager;