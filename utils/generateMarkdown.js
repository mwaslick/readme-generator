// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

 ## Description
 ${data.description}

 ## Installation
 ${data.installation}

 ## Usage 
 ${data.usage}

 ## License
 ${data.license}

 ## Contributing
 ${data.contributing}

 ## Tests
 ${data.tests}

 ## Questions

 If you have additional questions, you can contact me through my GitHub profile at [${data.username}](https://github.com/${data.username}), or e-mail me at ${data.email}.
`;
}

module.exports = generateMarkdown;
