const test = QUnit.test;

// import weaponScore from '../src/calculate/weaponScore.js';
// import rateScorecard from '../src/calculate/rate-scorecard';
import calculateResult from '../src/result/calculate/calculate-result.js';

// calculate result function takes answers object as argument
// function calculateResult(answers) {
//     // declare scorecard
//     const scorecard = { pirate: 0, viking: 1, ninja: 0 };
//     // update scorecard
//     weaponScore(answers.weapon, scorecard);
//     // analyze the scorecard and return character
//     const result = rateScorecard(scorecard);
//     return result;
// }

// declare scorecard within function

// call weaponScore function and pass scorecard as arguments

// call rateScorecard function and pass answer as function  

// call rateScorcard function and pass as function

test('analyzes answer object and returns Viking if viking has ', function(assert) {
    const answers = {
        weapon: 'axe'
    };
    const result = calculateResult(answers);
    const expected = 'Viking';
    


    assert.equal(result, expected);
});

