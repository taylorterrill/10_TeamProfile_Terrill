const Engineer = require('../library/engineer');

test("Can create a github.", () => {
    const testGithub = "taylorterrill";
    const employeeInstance = new Engineer("Taylor", 2, "taylorpterrill@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "taylorterrill";
    const employeeInstance = new Engineer("Taylor", 2, "taylorpterrill@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Taylor", 2, "taylorpterrill@gmail.com", "taylorterrill");
    expect(employeeInstance.getRole()).toBe(returnValue);
});