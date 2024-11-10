const cards = [
  { name: "card1", image: "fire.jpg" },
  { name: "card2", image: "water.jpg" },
  { name: "card3", image: "darkness.jpg" },
  { name: "card4", image: "fighting.jpg" },
  { name: "card5", image: "fairy.jpg" },
  { name: "card6", image: "grass.jpg" },
  { name: "card7", image: "psychic.jpg" },
  { name: "card8", image: "lightning.jpg" },
];

// Duplicate cards to make pairs
const shuffledCards = [...cards, ...cards].sort(() => Math.random() - 0.5);

let flippedCards = [];
let score = 0;

// Display cards on the board
function displayCards() {
  const gameBoard = document.getElementById("game-board");
  gameBoard.innerHTML = "";
  shuffledCards.forEach((card, index) => {
    var cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.dataset.name = card.name;

    var img = document.createElement("img");
    img.src = card.image;
    cardElement.appendChild(img);

    cardElement.addEventListener("click", () => onCardClick(cardElement));

    gameBoard.appendChild(cardElement);
  });
}

// Handle card click
function onCardClick(cardElement) {
  if (flippedCards.length === 2 || cardElement.classList.contains("flipped")) {
    return;
  }

  cardElement.classList.add("flipped");
  flippedCards.push(cardElement);

  if (flippedCards.length === 2) {
    const [firstCard, secondCard] = flippedCards;

    if (firstCard.dataset.name === secondCard.dataset.name) {
      score += 10;
      document.getElementById("score").textContent = `Điểm: ${score}`;
      flippedCards = [];
    } else {
      setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        flippedCards = [];
      }, 1000);
    }
  }
}

// Start the game
displayCards();
