const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const path = require('path');
const {
    constants
} = require('buffer');
const {
    syncBuiltinESMExports
} = require('module');
// const generateSite = require('path');

//  manager data to go into chart 
const promptManager = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameinput => {
                if (nameinput) {
                    return true;
                } else {
                    console.log('In order to continue, you MUST enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Please enter your employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('In order to continue, you MUST enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email (Required)',
            validate: email => {
                if (`email`) {
                    return true;
                } else {
                    console.log('Please enter your email to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            nme: 'officeNumber',
            message: 'Enter your office number (Required)',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('To continue, you MUST enter your office number!');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};
//menu build/ selections
const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please elect From The Following Choices:',
            choices: ['add an Engineer', 'add an Intern', 'Team Build is Complete']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case 'add an engineer':
                    promptEngineer();
                    break;
                case "add an intern":
                    promptIntern();
                    break;
                default:
                    buildTeam;
            }
        });
};

// engineer data
const promptEngineer = () => {
    console.log(`
                ==================
                Add a New Engineer
                ==================
                `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the new Engineer? (Required)',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('In order to continue, you MUST enter the name of engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Please enter your employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('In order to continue, you MUST enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('In order to continue, you MUST enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername ',
            message: 'Please enter your Github username(Required)',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('In order to continue, you MUST enter your Github username!');
                    return false;
                }
            }
        },

    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.githubUsername );
        teamMembers.push(engineer);
        promptMenu();
    })
};
const promptIntern = () => {
        console.log(`
                    ==============
                    Add New Intern  
                    ==============
                    `);

        return inquirer.prompt([
            {
                        type: 'input',
                        name: 'name',
                        message: 'What is the name of the intern? (Required)',
                        validate: internName => {
                            if (internName) {
                                return true;
                            } else {
                                console.log('In order to continue, you MUST enter the name of the intern!');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'employeeId',
                        message: 'Please enter your employee ID. (Required)',
                        validate: employeeId => {
                            if (employeeId) {
                                return true;
                            } else {
                                console.log('In order to continue, you MUST enter your employee ID!');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'Please enter your email (Required)',
                        validate: email => {
                            if (email) {
                                return true;
                            } else {
                                console.log('In order to continue, you MUST enter your email address!');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: 'Please enter the name of your school. (Required)',
                        validate: school => {
                            if (school) {
                                return true;
                            } else {
                                console.log('In order to continue, you MUST enter the name of your school!');
                                return false;
                            }
                        }
                    }
                ]).then(answers => {
                    console.long(answers);
                    const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
                    teamMembers.push(intern);
                    promptMenu();
                })
            };
                
            const buildTeam = () => {
                console.log(`
                ====================
                Team is Fully Built!
                ====================
            `);

            //output directory if path doesn't exist
            if (!fs.existsSync(OUTPUT_DIR)) {
                fs.mkdirSync(OUTPUT_DIR)
            }
            fs.writeFileSync(outputPath, generateSite(teamMemebers), "utf-8");
        }

        promptManager();
