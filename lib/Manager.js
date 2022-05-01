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
        }];
        
          return super.questions('Manager').concat(employeeQuestions);
    }

    writeValues(data){
        //const arr = `[${data.empId},"${data.empName}","${data.empEmail}","${data.officeNumber}","${data.empType}"]`
        super.addToEmp(data);
    }
}

module.exports = Manager;