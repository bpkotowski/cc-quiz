const test = QUnit.test;
import rateScorecard from '../src/result/calculate/rate-scorecard.js';
QUnit.module('rate-scorecard'); 



test('returns "Ninja" if ninja outscores other characters', function(assert) {
    const scorecard = { pirate: 0, ninja: 1, viking: 0 };
    const result = rateScorecard(scorecard);
    const expected = 'Ninja';

    assert.deepEqual(result, expected);
});

test('returns "Viking" if viking outscores other characters', function(assert) {
    const scorecard = { pirate: 0, ninja: 0, viking: 1 };
    const result = rateScorecard(scorecard);
    const expected = 'Viking';

    assert.deepEqual(result, expected);
});

test('returns "Pirate" if pirate outscores other characters', function(assert) {
    const scorecard = { pirate: 1, ninja: 0, viking: 0 };
    const result = rateScorecard(scorecard);
    const expected = 'Pirate';

    assert.deepEqual(result, expected);
});