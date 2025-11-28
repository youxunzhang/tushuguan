const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'author-profile.html');
const dataPath = path.join(__dirname, 'featured-authors-data.js');

const template = fs.readFileSync(templatePath, 'utf8');
const data = fs.readFileSync(dataPath, 'utf8');
const slugMatches = Array.from(data.matchAll(/slug:\s*"([^"]+)"/g));
const slugs = Array.from(new Set(slugMatches.map((match) => match[1])));

if (!slugs.length) {
  console.error('No author slugs found in featured-authors-data.js');
  process.exit(1);
}

slugs.forEach((slug) => {
  const outputFile = path.join(__dirname, `author-${slug}.html`);
  const content = template.replace(
    '<body>',
    `<body data-author-slug="${slug}">`
  );
  fs.writeFileSync(outputFile, content, 'utf8');
  console.log(`Created ${outputFile}`);
});
