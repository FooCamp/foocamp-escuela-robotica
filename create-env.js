const fs = require('fs');

fs.copyFile('.env.example', '.env', (err) => {
  if (err) throw err;
  console.log('.env was created successfully');
});
const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));