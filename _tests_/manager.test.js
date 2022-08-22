const Manager = require('../library/manager');

test("Can create an office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Taylor", 2, "taylorpterrill@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Taylor", 2, "taylorpterrill@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Taylor", 2, "taylorpterrill@gmail.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue);
});