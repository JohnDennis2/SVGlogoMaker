const fs = require('fs');

function generateSVG(userInput) {
  const { text, textColor, shape, shapeColor } = userInput;

  const shapeInstance = getShapeInstance(shape);
  shapeInstance.setColor(shapeColor);

  const svgContent = `<svg width="300" height="200">
    <text x="50%" y="50%" fill="${textColor}" font-size="20" text-anchor="middle">${text}</text>
    ${shapeInstance.render()}
  </svg>`;

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

function getShapeInstance(shape) {
  const { Triangle, Circle, Square } = require('./Shapes');

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

module.exports = generateSVG