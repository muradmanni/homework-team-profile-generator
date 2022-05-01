const { interval } = require('rxjs');
let emp = [];

class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name=name;
        this.email=email;
    }

    getRole(){
        return 'Employee';
    }

    getName(){
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    addToEmp(arr)
    {
        emp.push(arr);
    }

    showValues(){
        console.log(emp.length)
        console.log(emp);
    }

    questions(empType)
    {
        const employeeQuestions=  [
            {
            type: "input",
            message: "What is the team " + empType + "'s name? ",
            name: "empName",
            validate: (empName) => this.checkEmpName(empName)
        },
        {
            type: "input",
            message: "What is the team " + empType + "'s id? ",
            name: "empId",
            validate: (empId) => this.checkEmpId(empId)
        },
        {
            type: "input",
            message: "What is the team " + empType + "'s email? ",
            name: "empEmail",
            validate: (email) => this.checkEmail(email)
        }];
        
          return employeeQuestions;
    }

    checkEmpName(empName){
        if (empName==="")
            {return this.getRole() + "'s Name cannot be blank"}
        else
        {return true;}
    }

    checkEmpId(empId)
    {
        if (!isNaN(parseInt(empId)))
        {if (empId <=0)
            {
                return "Id must be greater than 0";
            }
        else
            {
                return true;  
            }
        }
        else
        {return this.getRole() + "'s ID should be a number";}
    }

    checkEmail(email){
        if (/(.+)@(.+){2,}\.(.+){2,}/.test(email))
        {
            return true;
        }
        else
        {
            return "Email format email@domain.com";
        }
    }
}

module.exports = Employee;