// require inquire, fs, and util
const inquirer = require("inquirer");
const fs = require("fs")
const util = require("util")

// imports generateMarkdown function
const generateMarkdown = require("./utils/generateMarkdown")

// changes writeFileAsync to a function that requires promises
const writeFileAsync = util.promisify(fs.writeFile)

// array of questions for user
const questions = [
   
    {
        type: "input",
        message: "What is the title of your application?",
        name: "title"
    },

    {
        type: "input",
        message: "Give a description of your application.",
        name: "description"
    },

    {
        type: "input",
        message: "What are the steps required to install your application? Provide a step-by-step guide",
        name: "installation"
    },

    {
        type: "input",
        message: "What are the instructions for using your application? Provide examples and screenshots when needed.",
        name: "usage"
    },

    {
        type: "list",
        message: "Which license do you want to use for your application?",
        name: "license",
        choices: ["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause"]
    },

    {
        type: "input",
        message: "If you want other developers to contribute to your application, provide guidelines for doing so.",
        name: "contributing"
    },

    {
        type: "input",
        message: "If you have written tests for your application, please include them and provide examples of how to run them.",
        name: "tests"
    },

    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },

    {
        type: "input",
        message: "What is your e-mail address?",
        name: "email"
    },

];

// function to write README file
function writeToFile(response) {
    writeFileAsync("README.md", generateMarkdown(response))
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(function(response) {
        writeToFile(response)
        console.log("Congratulations! You have successfully written a README file that can be found in this folder at README.md. Thank you for using the README generator!")
    })


}

// function call to initialize program
init();
