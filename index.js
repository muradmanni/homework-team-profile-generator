const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const htmlgenerator = require("./src/htmlgenerator");



console.log("Please build your team");

const  init = async () =>
{
    let addMore=true;
    const acceptedChoicesForMoreEmp = ["Engineer", "Intern"];

    const newManager = new Manager();    
    const newEngineer = new Engineer();
    const newIntern = new Intern();

    await inquirer.prompt(newManager.questions('Manager'))
    .then((answers) => {
        let newManager = new Manager(answers.id, answers.managerName, answers.email, answers.officeNumber);
        answers.empType = newManager.getRole();
        newManager.writeValues(answers);
        }
    );

     do{
        await inquirer.prompt([
            {
                type: "list",
                message: "Which type of team member would you like to add? ",
                choices : ["Engineer", "Intern", "I don't want to add any more team members"],
                name: "nextEmp",
            }
        ]).then( async (answers)  =>  {
            if (acceptedChoicesForMoreEmp.includes(answers.nextEmp))
            {
                console.log("i am still working");
                switch (answers.nextEmp)
                {
                    case 'Engineer':
                        await inquirer.prompt(newEngineer.questions(answers.nextEmp))
                        .then((answers) => {
                                answers.empType = newEngineer.getRole();
                                newEngineer.writeValues(answers);
                            }
                        );
                        break;

                    case 'Intern':
                        await inquirer.prompt(newIntern.questions(answers.nextEmp))
                        .then((answers) => {
                                answers.empType = newIntern.getRole();
                                newIntern.writeValues(answers);
                            }
                        );
                        break;
                }
                
            }
            else
            {
                addMore=false;
            }
        })
        
    }while (addMore)

    htmlgenerator(newManager.getTeam());
}

init();