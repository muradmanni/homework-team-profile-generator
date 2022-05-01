const Employee = require('./Employee')

class Intern extends Employee{
    constructor(id, name, email, school){
        super(id, name, email );
        this.school=school;
    }

    getRole(){
        return 'Intern';
    }

    getSchool(){
        return this.school;
    }

    questions(empType)
    {
        const employeeQuestions=  [
            {
                type: "input",
                message: "What is the team " + empType + "'s School? ",
                name: "school",
                validate: (school) => this.checkSchool(school)
            },];
        
          return super.questions(this.getRole()).concat(employeeQuestions);
    }

    
    checkSchool(school){
        if (school==="")
            {return this.getRole() + "'s school cannot be blank"}
        else
        {return true;}
    }

    writeValues(data){
        super.addToEmp(data);
    }
}

module.exports = Intern;