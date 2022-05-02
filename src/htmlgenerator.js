const fileSystem = require("fs");
const objTeam="";
function generateHtml(){
    return `
    
    `
}

function init(objTeam){
    this.objTeam=objTeam;

    fileSystem.writeFile('../dist/index.html', generateHtml(), (err) =>
      err ? console.error(err) : console.log('Success! Check dist folder for index.html')
    );
}