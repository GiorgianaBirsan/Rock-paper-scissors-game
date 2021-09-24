var posibilities = ['rock', 'paper', 'scissors', 'JOKER'];
var random = Math.floor(Math.random() * posibilities.length);

//console.log(posibilities[random]);

var userScore = 0;
var computerScore = 0;

function myChoice(id) {
    random = Math.floor(Math.random() * posibilities.length);
    // console.log(posibilities[random]);
    switch (posibilities[random]) {
        case "rock":
            switch (id) {
                case "rock":
                    document.getElementById('result').textContent = `${posibilities[random]} vs ${id}. Draw!`;
                    break;

                case "paper":
                    document.getElementById('result').textContent = `${posibilities[random]} vs ${id}. ${id} win!`;
                    userScore++;
                    document.getElementById('user-score').textContent = userScore.toString();
                    break;

                case "scissors":
                    document.getElementById('result').textContent = `${posibilities[random]} vs ${id}. ${posibilities[random]} win!`;
                    computerScore++;
                    document.getElementById('computer-score').textContent = computerScore.toString();
                    break;
            }
            break;

        case "paper":
            switch (id) {
                case "rock":
                    document.getElementById('result').textContent = `${posibilities[random]} vs ${id}. ${posibilities[random]} win!`;;
                    computerScore++;
                    document.getElementById('computer-score').textContent = computerScore.toString();
                    break;

                case "paper":
                    document.getElementById('result').textContent = `${posibilities[random]} vs ${id}. Draw!`;
                    break;

                case "scissors":
                    document.getElementById('result').textContent = `${posibilities[random]} vs ${id}. ${id} win!`;
                    userScore++;
                    document.getElementById('user-score').textContent = userScore.toString();
                    break;
            }
            break;

        case "scissors":
            switch (id) {
                case "rock":
                    document.getElementById('result').textContent = `${posibilities[random]} vs ${id}. ${id} win!`;
                    userScore++;
                    document.getElementById('user-score').textContent = userScore.toString();
                    break;

                case "paper":
                    document.getElementById('result').textContent = `${posibilities[random]} vs ${id}. ${posibilities[random]} win!`;
                    computerScore++;
                    document.getElementById('computer-score').textContent = computerScore.toString();
                    break;

                case "scissors":
                    document.getElementById('result').textContent = `${posibilities[random]} vs ${id}. Draw!`;
                    break;
            }
            break;

        case "JOKER":
            document.getElementById('result').textContent = 'GAME OVER! it`s JOKER';
            userScore = 0;
            document.getElementById('user-score').textContent = userScore.toString();
            computerScore = 0;
            document.getElementById('computer-score').textContent = computerScore.toString();
            break;

    }
};