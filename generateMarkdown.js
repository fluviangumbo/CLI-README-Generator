// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (data.license) { //check if there is a license

    } else {

    }
    renderLicenseLink();
    renderLicenseSection();
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   return `# ${data.title}
    ## Descripton

    ${data.describe}

    ## Table of Contents

    ${TOC}

    ## Installation

    ${data.install}

    ## Usage (Video Walkthrough)

    ${data.usage}

    ## Credits

    ${data.credit}

    ## License

    ${renderLicenseSection()}

    ## Badges

    ${data.badges}

    ## Features

    ${data.features}

    ## Tests

    ${data.tests}
    `;
}

export default generateMarkdown;
