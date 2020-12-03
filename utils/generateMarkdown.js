// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)

## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Test](#Test)
  * [Questions](#Questions)
  * [License](#License)


## Description  
<hr>
${data.description}
<br><br> 

## Installation
<hr> 
${data.installation}
<br><br>

## Usage 
<hr>
${data.usage}
<br><br>

## Contributing
<hr>
${data.contributing}
<br><br> 

## Test
<hr>
${data.test}
<br><br>

## Questions
If you have any questions regarding this project, you can contact me via email: [${data.email}](mailto:${data.email}) 
<br>
You can also find my profile on GitHub, my username is [${data.username}](https://github.com/${data.username}) 
<br>

## License
![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)
`
}

module.exports = generateMarkdown;