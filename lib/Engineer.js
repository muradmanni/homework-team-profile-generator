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
                validate: (github) => this.checkGithub(github)
            },];
        
          return super.questions(this.getRole()).concat(employeeQuestions);
    }

    checkGithub(gh){
        if (gh==="")
            {return this.getRole() + "'s github cannot be blank"}
        else
        {return true;}
    }

    writeValues(data){
        super.addToEmp(data);
    }
}

module.exports = Engineer;