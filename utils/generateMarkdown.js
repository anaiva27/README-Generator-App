// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution](#Contribution)
  * [Test](#Test)
  * [License](#License)
  
## Description 
${data.description}


## Installation 
${data.installation}


## Usage 
${data.usage}


## Contribution
${data.contribution}


## Test
${data.test}


## License
![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)
`;
}

module.exports = generateMarkdown;

// description, installation instructions, usage information, contribution guidelines, and test instructions

// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)