const fs = require('fs');

if (fs.existsSync("public/index.html")) {
fs.unlink("public/index.html", function (err) {
if (err) throw err
});
}

if (fs.existsSync("public/about.html")) {
fs.unlink("public/about.html", function (err) {
if (err) throw err
});
}

var oldPipeline = 'pipeline.jpg';
var newPipeline = 'public/pipeline.jpg';

if (fs.existsSync(oldPipeline)) {
fs.copyFile(oldPipeline, newPipeline, function (err) {
  if (err) throw err
});
}
