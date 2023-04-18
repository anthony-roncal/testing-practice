const App = require('./app');
let app = App();
const Calc = require('./calculator');
let calc = Calc();

test('capitalizes first char in string', () => {
    expect(app.capitalize('test')).toBe('Test');
})

test('reverses string', () => {
    expect(app.reverseString('Hello World')).toBe('dlroW olleH');
})

test('calculator adds 2 numbers', () => {
    expect(calc.add(1,2)).toBe(3);
})

test('calculator subtracts 2 numbers', () => {
    expect(calc.subtract(6,2)).toBe(4);
})

test('calculator divides 2 numbers', () => {
    expect(calc.divide(100,2)).toBe(50);
})

test('calculator multiplies 2 numbers', () => {
    expect(calc.multiply(10,7)).toBe(70);
})

test('caesar cipher encrypts string based on shift factor', () => {
    expect(app.caesarCipher('azAZ', 3)).toBe('dcDC');
})

test('returns average, min, max, and length of array', () => {
    let result = app.analyzeArray([10, 4, 100]);
    expect(result.average).toBe(38);
    expect(result.min).toBe(4);
    expect(result.max).toBe(100);
    expect(result.length).toBe(3);
})