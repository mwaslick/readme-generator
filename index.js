// require inquire, fs, util, and import generateMarkdown
const inquirer = require("inquirer");
const fs = require("fs")
const util = require("util")

const generateMarkdown = require("./utils/generateMarkdown")

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
        message: "What is the description of your application?",
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
        type: "input",
        message: "Which license do you want to use for your application?",
        name: "license"
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
    })


}

// function call to initialize program
init();
