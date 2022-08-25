const Manager = require('./library/manager');
const Engineer = require('./library/engineer');
const Intern = require('./library/intern');

const inquirer = require('inquirer');
const fs = require('fs');

const path = require('path');
const outputDir = path.resolve(__dirname, 'output');
const outputPath = path.join(outputDir, 'team.html');

const generateTeam = require('./src/template');

teamArray = [];

// initilization
function runApp () {

    // prompts user for which employee they would like to add. Runs function depending on answer.
    function createTeam () {
        inquirer.createPromptModule([{
            type: 'list',
            message: 'What type of employee would you like to add to your team?',
            name: 'addEmployeePrompt',
            choices: ["Manager", "Engineer", "Intern", "Nevermind"]
        }]).then(function (userInput) {
            switch(userInput.addEmployeePrompt) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    htmlBuilder();
            }
        })
    }

    // addManager runs when "Manager" is chosen in createTeam function
    function addManager() {
        inquirer.prompt ([
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





}
