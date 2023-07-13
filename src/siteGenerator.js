const fs = require('fs');
const ejs = require('ejs');
const plotly = require('plotly');


/*
  1) Generate an index page of all characters
*/
let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs'
});


fs.writeFileSync('../public/index.html', index_html, 'utf8');

let about_html = ejs.render(about_template, {
  filename: __dirname + '/views/about.ejs'
});

fs.writeFileSync('../public/about.html', about_html, 'utf8');
