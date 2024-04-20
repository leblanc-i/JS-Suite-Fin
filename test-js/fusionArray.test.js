const fusionArray = require("./fusionArray");

test("fusionne deux tableaux", () => {
    let arr1 = [1, 3];
    let arr2 = [2, 4]

    expect(fusionArray(arr1, arr2)).toEqual([1, 3, 2, 4]);
    expect(fusionArray(arr1, arr2)).not.toBe([1, 2, 3, 4])
})