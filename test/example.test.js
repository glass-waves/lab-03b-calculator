// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { additionMachine, 
    subtractionMachine,
    multiplicationMachine,
    divisionMachine } from '../mathUtils.js';

const test = QUnit.test;

//additionMachine tests
test('adding 5 and 7 should equal 12', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 12;
    const value1 = 5;
    const value2 = 7;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = additionMachine(value1, value2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('adding 20 and 3 should equal 23', (expect) => {
    const expected = 23;
    const value1 = 20;
    const value2 = 3;
    const actual = additionMachine(value1, value2);
    expect.equal(actual, expected);
});

//subtractionMachine tests
test('subtracting 10 from 34 should equal 24', (expect) => {
    const expected = 24;
    const value1 = 34;
    const value2 = 10;
    const actual = subtractionMachine(value1, value2);
    expect.equal(actual, expected);
});
test('subtracting 5 from 2 should equal -3', (expect) => {
    const expected = -3;
    const value1 = 2;
    const value2 = 5;
    const actual = subtractionMachine(value1, value2);
    expect.equal(actual, expected);
});

//multiplicationMachine tests
test('multiplying 5 by 12 should equal 60', (expect) => {
    const expected = 60;
    const value1 = 5;
    const value2 = 12;
    const actual = multiplicationMachine(value1, value2);
    expect.equal(actual, expected);
});
test('multiplying -3 by 10 should equal -30', (expect) => {
    const expected = -30;
    const value1 = -3;
    const value2 = 10;
    const actual = multiplicationMachine(value1, value2);
    expect.equal(actual, expected);
});

//divisionMachine tests
test('dividing 45 by 5 should equal 9', (expect) => {
    const expected = 9;
    const value1 = 45;
    const value2 = 5;
    const actual = divisionMachine(value1, value2);
    expect.equal(actual, expected);
});
test('dividing -40 by 5 should equal -8', (expect) => {
    const expected = -8;
    const value1 = -40;
    const value2 = 5;
    const actual = divisionMachine(value1, value2);
    expect.equal(actual, expected);
});