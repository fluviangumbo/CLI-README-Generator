// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case "MIT":
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        case "GNU GPLv3":
        case "Apache-2.0":
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        case "BSD":
            '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
        case "None":
            return ''
    }
}

// We have handled this inside of the render license section function
// If there is no license, return an empty string
// function renderLicenseLink(license) {

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    switch (license) {
        case "MIT":
            return `This project utilizes the MIT License.
            Link: https://www.mit.edu/~amini/LICENSE.md`
        case "GNU GPLv3":
            return `This project utilizes the GNU GPLv3 License.
            Link: https://www.gnu.org/licenses/lgpl-3.0`
        case "Apache-2.0":
            return `This project utilizes the Apache-2.0 License.
            Link: https://opensource.org/license/apache-2-0`
        case "BSD":
            return `This project utilizes the BSD License.
            Link: https://opensource.org/license/BSD-3-Clause` 
        case "None":
            return ''
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   return `# ${data.title}
    ${renderLicenseBadge(data.license)}

    ## Descripton

    ${data.describe}

    ## Table of Contents

    ${TOC} //WHAT TO DO HERE?

    ## Installation

    ${data.install}

    ## Usage

    ${data.usage}

    ${renderLicenseSection(data.license)}

    ## Contributing

    ${data.contribute}

    ## Tests

    ${data.tests}

    ## Questions

    ${data.github}
    ${data.email}

    ${data.question}
    `;
}

export default generateMarkdown;
