var animals = ["Apple","Banana","Cauliflower","Grape","Kiwi","Lemon","Mango","Onion","Orange","Papaya","Pea","Potato","Spinach","Tomato","Watermelon"];  // Replace with your animals
var score = 0;

function selectAnimal() {
    var correctAnimal = animals[Math.floor(Math.random() * animals.length)];
    var wrongAnimal = animals[Math.floor(Math.random() * animals.length)];
    while (wrongAnimal === correctAnimal) {
        wrongAnimal = animals[Math.floor(Math.random() * animals.length)];
    }
    var options = [correctAnimal, wrongAnimal];
    options.sort(() => Math.random() - 0.5);

    document.getElementById('animalImage').src = "images/" + correctAnimal + ".png";
    document.getElementById('option1').innerText = options[0];
    document.getElementById('option2').innerText = options[1];

    return correctAnimal;
}

var correctAnimal = selectAnimal();

document.getElementById('option1').addEventListener('click', function() {
    if (this.innerText === correctAnimal) {
        score += 10;
    } else {
        showModal();
    }
    document.getElementById('score').innerText = 'Your score: ' + score;
    correctAnimal = selectAnimal();
});

document.getElementById('option2').addEventListener('click', function() {
    if (this.innerText === correctAnimal) {
        score += 10;
    } else {
        showModal();
    }
    document.getElementById('score').innerText = 'Your score: ' + score;
    correctAnimal = selectAnimal();
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function showModal() {
    var gameOverText = document.createElement('div');
    gameOverText.innerText = 'Game Over';
    gameOverText.style.color = 'red';  // Add your desired styles here
    gameOverText.style.fontSize = '2em';  // Example: Increase the font size

    var finalScoreText = document.createElement('div');
    finalScoreText.innerText = 'Your final score: ' + score;

    var finalScoreElement = document.getElementById('finalScore');
    finalScoreElement.innerHTML = '';  // Clear the existing content
    finalScoreElement.appendChild(gameOverText);
    finalScoreElement.appendChild(finalScoreText);

    modal.style.display = "block";
    score = 0;  // Reset the score
}



