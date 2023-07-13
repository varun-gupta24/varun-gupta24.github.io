const fs = require('fs');

if (fs.existsSync("public/index.html")) {
fs.unlink("public/index.html", function (err) {
if (err) throw err
});
}
