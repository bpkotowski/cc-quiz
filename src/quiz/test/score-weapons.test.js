const test = QUnit.test;
import weaponScore from '../src/result/calculate/calculate-result.js';
QUnit.module('weapons score'); //header for the test

let scorecard = null; // initilaize scorecard for each test
QUnit.testStart(function() {
    scorecard = { pirate: 0, ninja: 0, viking: 0 };
});



test('return viking axe if chosen', function(assert) { // callback function
    
    // const scorecard = { pirate: 0, ninja: 0,viking: 0 };
    const expected = { pirate: 0, ninja: 0, viking: 1 };
    let result = weaponScore('axe', scorecard);
    assert.deepEqual(result, expected);
    
    
}); 

// assert is the argument, pass the argument within the function


test('add one to pirate within scorecard when "cutlass" is received', function(assert) {
    const expected = { pirate: 1, ninja: 0, viking: 0 };
    // const scorecard = { pirate: 0, ninja: 0, viking: 0,}
    let result = weaponScore('cutlass', scorecard);

    assert.deepEqual(result, expected);
});

test('add one to ninja within scorecard when "shuriken" is received', function(assert) {
    const expected = { pirate: 0, ninja: 1, viking: 0 };
    // const scorecard = { pirate: 0, ninja: 0, viking: 0,}
    let result = weaponScore('shuriken', scorecard);

    assert.deepEqual(result, expected);
});


// const test = QUnit.test;

// test('time to write a test', function(assert) {
//     assert.equal(true, false);
// });
