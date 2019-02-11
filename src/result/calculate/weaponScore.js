function weaponScore(weapon, scorecard) {
    if(weapon === 'axe') {
        scorecard.viking += 1;
    }

    if(weapon === 'cutlass') {
        scorecard.pirate += 1;
    }
    if(weapon === 'shuriken') {
        scorecard.ninja += 1;
    }

    return scorecard;
}




export default weaponScore;












