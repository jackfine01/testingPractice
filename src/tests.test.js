// const capitalize = require('./tests');

const analyzeArray = require("./tests")
const caesarCipher = require("./tests")

// test('example converts to Example', () => {
//   expect(capitalize('example')).toBe('Example');
// });

// test('example of the example converts to Example of the example', () => {
//     expect(capitalize('example of the example')).toBe('Example of the example');
//   });

//   test('EXAMPLE OF THE EXAMPLE OF THE EXAMPLE converts to EXAMPLE OF THE EXAMPLE OF THE EXAMPLE', () => {
//     expect(capitalize('EXAMPLE OF THE EXAMPLE OF THE EXAMPLE')).toBe('EXAMPLE OF THE EXAMPLE OF THE EXAMPLE');
//   });

// const reverseString = require('./tests');

// test('example converts to Example', () => {
//   expect(reverseString('example')).toBe('elpmaxe');
// });

// const calculator = require('./tests')

// test('two plus two equals four', () => {
//   expect(calculator.add(2,2)).toBe(4);
// });
// test('two minus three equals negative one', () => {
//     expect(calculator.subtract(2,3)).toBe(-1);
//   });
// test('two times four equals eight', () => {
//   expect(calculator.multiply(2,4)).toBe(8);
// });
// test('ten divided by two equals five', () => {
//     expect(calculator.divide(10,2)).toBe(5);
// });

// test('HeLLo with shift 3 is KhOOr', () => {
//     expect(caesarCipher('HeLLo' , 3)).toBe('KhOOr');
// })
// test('Hello World with shift 3 is Khoor, Zruog!', () => {
//     expect(caesarCipher('Hello, World!' , 3)).toBe('Khoor, Zruog!');
// })

test('analyzeArray [1,8,3,4,2,6]', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual
    ({average: 4, min: 1, max: 8, length: 6})
});

