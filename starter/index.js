const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
       type:'',
       name;'',
       message: 'what is your Github username?'
    },
    {
        type: 'input',
        name:  'email',
        message: 'what is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: "what is your project's name? " 
    },
    {
        type: 'input',
        name; 'description',
        message: 'please write a short description of your project? '
    },
    {
        type: 'list',
        name:  'license',
        message: 'what kind of license? ',
        choice: ["MIT", "APACHE 2.0", "GPL","NONE"]
    },
    {
        type: 'input',
        name: 'installation',
        mesage: 'what command should be run to install dependencies',
        default:'npm i'
    },
    {
        type: 'input',
        name: 'installation',
        mesage: 'what command should be run to test ',
        default:'npm test'
        
    }
    {
        type: 'input',
        name: 'usage',
        mesage: 'what does the user need to know unsing the repo ',
        
    }
    {
        type: 'input',
        name: 'contributing',
        mesage: 'what does the user need to know unsing the repo ',      
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(question).then((Response) => {
        console.log(`Generating README...`);
        writeToFile('README.md', generateMarkdown({...response}))
    })

}

// function call to initialize program
init();
