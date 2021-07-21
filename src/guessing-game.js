class GuessingGame {
    constructor() {
        this.start = 0;
        this.end = 0;
        this.result = 0;

        this.setRange = this.setRange.bind(this);
        this.guess = this.guess.bind(this);
        this.lower = this.lower.bind(this);
        this.greater = this.greater.bind(this);
    }

    // this method accepts min and max value of range of number to guess
    setRange(min, max) {
        this.start = min;
        this.end = max;
        return 'Good luck!';
    }

    // this method returns solution candidate (you make an assumption based on range and previous assumptions)
    guess() {
        this.result = Math.round( (this.start + this.end) / 2 );
        return this.result;
    }

    // this method is called if prev call of guess() returned number which is greater than answer
    lower() {
        this.end = this.result;
        return this.end;
    }

    // this method is called if prev call of guess() returned number which is lower than answer
    greater() {
        this.start = this.result;
        return this.start;
    }
}

module.exports = GuessingGame;
