// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Description
${data.description}

## Table of Contents
-[Installation](#installation)

-[Usage](#usage)

-[Contributing](#contributing)

-[Tests](#tests)

-[Questions](#questions)

## Installation
In order to install dependencies use ${data.installation}.

## Usage
${data.info}

## Contributing
${data.contributing}

## Tests
In order to run tests, use command ${data.test_cmd}.

## Questions
Please feel free to reach out to me with any questions. My email is ${data.email} and my GitHub is [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
