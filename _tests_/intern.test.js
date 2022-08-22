const Intern = require('../library/intern');

test("Can create school.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Taylor", 2, "taylorpterrill@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Taylor", 2, "taylorpterrill@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Taylor", 2, "taylorpterrill@gmail.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});