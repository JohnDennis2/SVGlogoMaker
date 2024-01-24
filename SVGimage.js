const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

async function generateSVG(userInput) {
  const templatePath = path.join(__dirname, '../templates/logoTemplate.svg');
  const templateContent = fs.readFileSync(templatePath, 'utf-8');

  // Use EJS or a similar template engine to replace placeholders in the template
  const svgContent = ejs.render(templateContent, userInput);

  // Write the generated SVG content to logo.svg
  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

module.exports = generateSVG;