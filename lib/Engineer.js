const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(id, name, email, github){
        super(id, name, email );
        this.github=github;
    }

    getRole(){
        return 'Engineer';
    }

    getGithub(){
        return this.github;
    }

    questions(empType)
    {
        const employeeQuestions=  [
            {
                type: "input",
                message: "What is the team " + empType + "'s GIthub? ",
                name: "github",
            },];
        
          return super.questions(this.getRole()).concat(employeeQuestions);
    }

    writeValues(data){
        //const arr = `[${data.empId},"${data.empName}","${data.empEmail}","${data.github}","${data.empType}"]`
        super.addToEmp(data);
    }
}

module.exports = Engineer;