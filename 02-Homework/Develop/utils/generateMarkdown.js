// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const mitLink = `https://choosealicense.com/licenses/mit/`;
    const gnuLink = `https://choosealicense.com/licenses/lgpl-3.0/`;
    const mozLink = `https://choosealicense.com/licenses/mpl-2.0/`;
    const apacheLink = `https://choosealicense.com/licenses/mpl-2.0/`;
    const nolicense = ``;
    if (answers.license === `MIT`) {
        return mitLink;
    } else if (answers.license === `Apache`) {
        return apacheLink;
    } else if (answers.license === `Mozilla`) {
        return mozLink;
    } else if (answers.license === `GNU LGPLv3`) {
        return gnuLink;
    } else {
        return nolicense;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    return `
    # ${answers.title}
    
    `;

}

module.exports = generateMarkdown;