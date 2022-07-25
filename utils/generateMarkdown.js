// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'None') {
        return `\n* [License](#license)\n`;
      }
      return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License
    
    This project is licensed under the ${license} license.`;
      }
      return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)

* [Usage](#usage)

* ${renderLicenseLink(data.license)}

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation
In order to install dependencies use \`${data.installation}\`.

## Usage
${data.info}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
In order to run tests, use command ${data.test_cmd}.

## Questions
Please feel free to reach out to me with any questions. My email is ${data.email} and my GitHub is [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
