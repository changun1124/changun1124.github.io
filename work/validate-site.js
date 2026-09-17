const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('css/style.css', 'utf8');
const js = fs.readFileSync('js/script.js', 'utf8');

const requiredSections = ['home', 'about', 'skills', 'projects', 'contact'];
const missingSections = requiredSections.filter((id) => !html.includes(`id="${id}"`));
const controls = [...html.matchAll(/aria-controls="([^"]+)"/g)].map((match) => match[1]);
const missingControls = controls.filter((id) => !html.includes(`id="${id}"`));
const rootRelative = [...html.matchAll(/(?:href|src)="(\/[^/][^"]*)"/g)].map((match) => match[1]);
const projectCount = (html.match(/class="project-card reveal"/g) || []).length;

const results = {
  requiredFiles: ['index.html', 'css/style.css', 'js/script.js', 'README.md'].every(fs.existsSync),
  missingSections,
  missingControls,
  rootRelative,
  projectCount,
  cssBraceBalance: (css.match(/{/g) || []).length - (css.match(/}/g) || []).length,
  hasSmoothScroll: js.includes('scrollIntoView'),
  hasIntersectionObserver: js.includes('IntersectionObserver'),
  placeholdersPresent: html.includes('USERNAME') && html.includes('example@email.com')
};

console.log(JSON.stringify(results, null, 2));
if (!results.requiredFiles || missingSections.length || missingControls.length || rootRelative.length || projectCount !== 4 || results.cssBraceBalance !== 0) process.exit(1);
