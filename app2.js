const inquirer = require('inquirer');

inquirer.prompt([{
    name: 'name',
    type: 'input',
    message: 'What\'s your name?',
  }, {
    name: 'age',
    type: 'number',
    message: 'How old are you?',
    default: 18,
  }]).then((answers) => {
    console.log(`\nHi ${answers.name}. ${answers.age}? Nice! \n`);
  });