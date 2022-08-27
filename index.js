const Manager = require('./library/manager');
const Engineer = require('./library/engineer');
const Intern = require('./library/intern');

const inquirer = require("inquirer");
const fs = require('fs');

const path = require('path');
const outputDir = path.resolve(__dirname, 'output');
const outputPath = path.join(outputDir, 'team.html');

const generateTeam = require('./src/template');

teamArray = [];

// initilization
function runApp() {

    // runs when app is started, every team needs a manager!
    function addManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the manager's name?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's employee ID number?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email address?"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's office number?"
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            createTeam();
        })
    }

    // prompts user for which employee they would like to add. Runs function depending on answer.
    function createTeam() {
        inquirer.prompt([{
            type: 'list',
            message: 'What type of employee would you like to add to your team?',
            name: 'addEmployeePrompt',
            choices: ["Engineer", "Intern", "Manager", "Done"]
        }]).then(userInput => {
            switch (userInput.addEmployeePrompt) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "Manager":
                    addManager();
                    break;
                default:
                    htmlBuilder();
            }
        })

        function addEngineer() {
            inquirer.prompt([

                {
                    type: "input",
                    name: "engineerName",
                    message: "What is the engineer's name?"
                },

                {
                    type: "input",
                    name: "engineerId",
                    message: "What is the engineer's employee ID number?"
                },

                {
                    type: "input",
                    name: "engineerEmail",
                    message: "What is the engineer's email address?"
                },

                {
                    type: "input",
                    name: "engineerGithub",
                    message: "What is the engineer's GitHub username?"
                }

            ]).then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
                teamArray.push(engineer);
                createTeam();
            });

        }

        function addIntern() {
            inquirer.prompt([

                {
                    type: "input",
                    name: "internName",
                    message: "What is the intern's name?"
                },

                {
                    type: "input",
                    name: "internId",
                    message: "What is the intern's employee ID number?"
                },

                {
                    type: "input",
                    name: "internEmail",
                    message: "What is the intern's email address?"
                },

                {
                    type: "input",
                    name: "internSchool",
                    message: "What school does the intern attend?"
                }

            ]).then(answers => {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                teamArray.push(intern);
                createTeam();
            });
        }
        function htmlBuilder() {
            console.log("Team created!")

            fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

        }
    }

    addManager();

}
runApp();
