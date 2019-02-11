import weaponScore from './weaponScore.js';
import rateScorecard from './rate-scorecard.js';


function calculateResult(answers) {
    // declare scorecard
    const scorecard = { pirate: 0, viking: 1, ninja: 0 };
    // update scorecard
    weaponScore(answers.weapon, scorecard);
    // analyze the scorecard and return character
    const result = rateScorecard(scorecard);
    return result;
}

export default calculateResult;