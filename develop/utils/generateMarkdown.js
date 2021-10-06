// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const input = license;
  switch(input) {
    case 'MIT':
      response = "[![License MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      return response;
    case 'APACHE 2.0':
      response = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
      return response;
    case 'GPL 3.0':
      response = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"; 
      return response;
    case 'BSD 3':
      response = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
      return response;
    case 'None':
      response = "";
      return response;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const input = license;
  switch(input)  {
    case 'MIT':
      response = "(https://opensource.org/licenses/MIT)"
      return response;
    case 'APACHE 2.0':
      response = "(https://opensource.org/licenses/Apache-2.0)"
      return response;
    case 'GPL 3.0':
      response = "(https://www.gnu.org/licenses/gpl-3.0)"
      return response;
    case 'BSD 3':
      response = "(https://opensource.org/licenses/BSD-3-Clause)"
      return response;
    case 'None':
      response = "";
      return response;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "") {
    return "";
  } else {
    return `## License
    This project is covered under the ${license} license. Visit the following link for more information on this license: [${license}]${renderLicenseLink(license)}`;
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install necessary dependencies, please run the following command:
  \' \' \'
  ${data.installation}
  \' \' \'
  # Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  
  ## Tests
  To test, please run the following command;
  \' \' \'
  ## Questions
  For any questions about the project, please contact me by either of the following links:
  * Email = ${data.email}
  or visit my GitHub profile:
  * GitHub - ${"[" + data.github + "]" + "(https://github.com/" + data.github + ")"}
`;
}

module.exports = generateMarkdown;