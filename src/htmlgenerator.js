const fileSystem = require("fs");
const objTeam="";

function generateHtml(objTeam){
  return `
  <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"
  />
  <link href="./style.css" rel="stylesheet">
  
  <title>Team Profile</title>
</head>
<main>
  <div class="container tophead">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <span class="fs-4">My Team</span>
    </header>
  </div>

    <div class="container">
      <div class="row">
         ${getTeamProfile(objTeam)}
      </div>
  </div>
  </div>
</main>  
</html>`
}

function getTeamProfile(objTeam) {
  let teamProfile="";
  for (let i=0; i<objTeam.length; i ++)
  {
      
      teamProfile += `<div class="col-md-6 col-lg-3">
          <div class="card">
              <div class="card-body">
                <h5 class="card-title">${objTeam[i].empName}</h5>
                <h5 class="card-title">${ getEmp(objTeam[i].empType) }
              </div>
              <div class="card-body-details">  
                  <p class="card-details">ID: ${objTeam[i].empId}</p>
                  <p class="card-details">Email: <a href="${objTeam[i].empEmail}">${objTeam[i].empEmail}</a></p>
                  <p class="card-details">${getExtraInfo(objTeam[i])}</p>
                </div>
            </div>
      </div>`   
  }
  return teamProfile;
}

function getEmp(empType)
{
  switch (empType)
  {
      case "Manager":
          return `<i class="fas fa-mug-hot"></i> ${empType}</h5>`
      case "Engineer":
          return `<i class="fas fa-glasses"></i> ${empType}</h5>`
      case "Intern":
          return `<i class="fas fa-user-graduate"></i> ${empType}</h5>`
  }
}

function getExtraInfo(emp){
  switch (emp.empType)
  {
      case "Manager":
          return `Office number: ${emp.officeNumber}</h5>`
      case "Engineer":
          return `Github: ${emp.github}</h5>`
      case "Intern":
          return `School: ${emp.school}</h5>`
  }
}

function createHtml(objTeam){
  fileSystem.writeFile('./dist/index.html', generateHtml(objTeam), (err) =>
    err ? console.error(err) : console.log('Success! Check dist folder for index.html')
  );
}

module.exports =  createHtml ;