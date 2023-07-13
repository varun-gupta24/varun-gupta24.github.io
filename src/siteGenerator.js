const fs = require('fs');
const ejs = require('ejs');
const plotly = require('plotly');


let index_template = fs.readFileSync('views/index.ejs', 'utf8');

/*
  1) Generate an index page of all characters
*/
let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs'
});


fs.writeFileSync('../public/index.html', index_html, 'utf8');


