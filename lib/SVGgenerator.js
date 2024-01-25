const fs = require('fs');
const { Triangle, Circle, Square } = require('./Shapes');
const inquirer = require ('inquirer')

function init() {
  inquirer.prompt([
    {
      type : "input",
      name : "text", 
      message : "please add a text for your logo no more 3 characters"

    },
    {
      type : "input",
      name : "textColor", 
      message : "please choose a shape color"

    },
    {
      type : "list",
      name : "shape", 
      message : "please choose a shape",
      choices: ["triangle", "square", "circle"]
    },
    {
      type : "input",
      name : "shapeColor", 
      message : "please choose a color"

    }, 
  ]) .then(answers => {
    console.log(answers)

    generateSVG(answers)
  }) 
}


function generateSVG(userInput) {
  const { text, textColor, shape, shapeColor } = userInput;

  const shapeInstance = getShapeInstance(shape);
  shapeInstance.setColor(shapeColor);

  const svgContent = `<svg width="300" height="200">
  ${shapeInstance.render()}
    <text x="50%" y="50%" fill="${textColor}" font-size="20" text-anchor="middle">${text}</text>
  
  </svg>`;
// writes file to dist folder via pathing
  fs.writeFileSync('../dist/logo.svg', svgContent);
  console.log('Generated logo.svg');
}

function getShapeInstance(shape) {
  

  switch (shape) {
    case 'triangle':
      return new Triangle();
    case 'circle':
      return new Circle();
    case 'square':
      return new Square();
    default:
      throw new Error(`Invalid shape: ${shape}`);
  }
}


init()