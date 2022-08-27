const Engineer = require("../library/engineer");

const generateTeam = team => {

    const generateManager = manager => {
        return `
        <div class="card employee-card">
                    <div class="card-header bg-info text-white">
                        <h2 class="card-title">${manager.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">${manager.getId()}</li>
                            <li class="list-group-item">Email: <a
                                    href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>
        `;
    };

    const generateEngineer = engineer => {
        return `
        <div class="card employee-card">
                    <div class="card-header bg-info text-white">
                        <h2 class="card-title">${engineer.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i> ${engineer.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">${engineer.getId()}</li>
                            <li class="list-group-item">Email: <a
                                    href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                            <li class="list-group-item">GitHub:<a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                        </ul>
                    </div>
                </div>
        `;
    };

    const generateIntern = intern => {
        return `
        <div class="card employee-card">
                    <div class="card-header bg-info text-white">
                        <h2 class="card-title">${intern.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> ${intern.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">${intern.getId()}</li>
                            <li class="list-group-item">Email: <a
                                    href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                            <li class="list-group-item">School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")  
    );

    return html.join("")
};

module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <header class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </div>
    </header>

    <section class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>

    </section>

</body>

</html>

    `;
};