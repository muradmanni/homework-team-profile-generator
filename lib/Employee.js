const { interval } = require('rxjs');
let emp = [];

class Employee {
    constructor(id, name, email) {
        
        this.id=id;
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
        console.log(emp);
    }

    questions(empType)
    {
        const employeeQuestions=  [
            {
            type: "input",
            message: "What is the team " + empType + "'s name? ",
            name: "empName",
        },
        {
            type: "input",
            message: "What is the team " + empType + "'s id? ",
            name: "empId",
            validate: (id) => {
                if (id<=0)
                    {
                        return "Id must be greater than 0";
                    }
                else
                    {
                            return true;  
                    }
            }
        },
        {
            type: "input",
            message: "What is the team " + empType + "'s email? ",
            name: "empEmail",
        }];
        
          return employeeQuestions;
    }
}

module.exports = Employee;