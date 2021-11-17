const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const path = require('path');
// const generateSite = require('path');

const promptManager = () => {
        return inquirer.prompt([{
                        type: 'input',
                        name: 'name',
                        message: 'What is your name? (Required)',
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log('Please enter your name to continue!');
                                return false;
                            }
                        }
                    },
                    {
                            type: 'input',
                            name: 'employeeId',
                            message: 'Enter your employee ID (Required)',
                            validate: employeeID => {
                                if (employeeId) {
                                    return true;
                                } else {
                                    console.log('Please enter your employee ID to continue!');
                                    return false;
                                }
                            }
                        },
                        {