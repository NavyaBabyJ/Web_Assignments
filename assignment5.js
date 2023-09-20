const secretNumber = Math.floor(Math.random() * 100) + 1;

        let attempts = 0;
        const guesses = [];

        function playGame() {
            const guess = prompt("Guess a number between 1 and 100:");
            attempts++;

            if (guess === null) {
                alert("Game over. You canceled the game.");
                displayResults();
                return;
            }

            const guessNumber = parseInt(guess);

            if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
                alert("Please enter a valid number between 1 and 100.");
            } else if (guessNumber < secretNumber) {
                alert("Too low! Try again.");
                guesses.push(guessNumber);
            } else if (guessNumber > secretNumber) {
                alert("Too high! Try again.");
                guesses.push(guessNumber);
            } else {
                alert(`Congratulations! You guessed the correct number ${secretNumber} in ${attempts} attempts.`);
                displayResults();
            }

            playGame();
        }

        function displayResults() {
            const resultContainer = document.createElement("div");
            resultContainer.innerHTML = `<h2>Game Over</h2>`;
            resultContainer.innerHTML += `<p>Secret Number was: ${secretNumber}</p>`;
            resultContainer.innerHTML += `<p>Number of Attempts: ${attempts}</p>`;
            resultContainer.innerHTML += `<p>Your Guesses: ${guesses.join(', ')}</p>`;

            document.body.appendChild(resultContainer);
        }

        playGame();