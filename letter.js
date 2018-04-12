function Letter(value) {
    this.letter = value;
    this.guessed = false;
    this.print = function () {
        //if the letter is empty, it was already guessed
        if (this.letter === " ") {
            this.guessed = true;
            return " ";
        } else { //letter wasnt guessed yet, display placeholder _
            if (this.guessed === false) {
                return "_";
            } else {
                return this.letter;
            }
        }
    };
    // Check if user guess is the same value
    this.guess = function (guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }
    }
}

exports.Letter = Letter;