
const answersJSON = window.localStorage.getItem('answers');
import calculateResult from './calculate-result.js';
let answers = null;
if(answersJSON) {
    answers = JSON.parse(answersJSON);
}

else {
    window.location = '/';
}

const character = document.getElementById('character');
const result = calculateResult(answers);
character.textContent = result;