const addNumber = require("./add");

test("Additionne deux nombre", () => {
    expect(addNumber(2, 5)).toBe(7);
    expect(addNumber(2, -5)).toBe(-3);
})