import {square, cube} from '../logic/calculator.js'

test('3^2 equals to 9', () => {
    expect(square(3)).toBe(9);
});

test('0^2 equals to 0', () => {
    expect(square(0)).toBe(0);
});

test('1^2 equals to 1', () => {
    expect(square(1)).toBe(1);
});

test('-4^2 equals to 16', () => {
    expect(square(-4)).toBe(16);
});

test('3^3 equals to 27', () => {
    expect(cube(3)).toBe(27);
});

test('0^3 equals to 0', () => {
    expect(cube(0)).toBe(0);
});

test('1^3 equals to 1', () => {
    expect(cube(1)).toBe(1);
});

test('-4^3 equals to 64', () => {
    expect(cube(-4)).toBe(-64);
});