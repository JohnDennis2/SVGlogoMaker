
const SVGimage = require("./SVGimage")
const inquirer = require("inquirer")
const fs = require("fs")




const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
]


function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data)
        fs.writeFileSync("logo.svg", generateMarkdown(data))
    })
}
 init()

