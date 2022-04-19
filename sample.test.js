const sayHi = require("./sample"); // It requires the sample.js file

// Test to make sure the function returns Hi
test("Message must return Hi", () => {
  expect(sayHi()).toEqual("Hi");
});
