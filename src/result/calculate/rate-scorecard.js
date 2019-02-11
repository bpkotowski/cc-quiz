function rateScorecard(scorecard) {
    const pirate = scorecard.pirate;
    const ninja = scorecard.ninja;
    const viking = scorecard.viking;

    if(ninja > pirate && ninja > viking){
        return 'Ninja';

    }

    if(viking > pirate && viking > ninja) {
        return 'Viking';
    }

    if(pirate > ninja && pirate > viking) {
        return 'Pirate';

    }
}

export default rateScorecard;