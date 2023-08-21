const fs = require('fs');
const ejs = require('ejs');
const plotly = require('plotly');


let index_template = fs.readFileSync('views/index.ejs', 'utf8');
let projects_template = fs.readFileSync('views/projects.ejs', 'utf8');
let research_template = fs.readFileSync('views/research.ejs', 'utf8');

/*
  1) Generate an index page of all characters
*/
let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs'
});

let projects_html = ejs.render(projects_template, {
  filename: __dirname + '/views/projects.ejs'
});

let research_html = ejs.render(research_template, {
  filename: __dirname + '/views/research.ejs'
});


fs.writeFileSync('../public/index.html', index_html, 'utf8');
fs.writeFileSync('../public/projects.html', projects_html, 'utf8');
fs.writeFileSync('../public/research.html', research_html, 'utf8');


