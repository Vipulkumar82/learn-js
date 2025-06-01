const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');
const highScoreEl = document.getElementById('high-score');
const speedRange = document.getElementById('speed-range');
const speedValue = document.getElementById('speed-value');
const popup = document.getElementById('highscore-popup');
const popupScore = document.getElementById('popup-score');
const closePopupBtn = document.getElementById('close-popup');

const gridSize = 20;
const tileSize = canvas.width / gridSize;

let snake, direction, food, score, gameInterval, isGameOver, nextDirection;
let speed = Number(speedRange.value);
const minSpeed = Number(speedRange.min); // 50
const speedStep = 5; // ms decrease per food eaten
let highScore = Number(localStorage.getItem('snakeHighScore')) || 0;
let isNewHighScore = false;

// Sound effects
const gameOverSound = new Audio('https://cdn.jsdelivr.net/gh/rajeshkumarkhadka/sound@main/gameover.mp3');
const highScoreSound = new Audio('https://cdn.jsdelivr.net/gh/rajeshkumarkhadka/sound@main/highscore.mp3');
const eatSound = new Audio('https://cdn.jsdelivr.net/gh/rajeshkumarkhadka/sound@main/eat.mp3');

function updateHighScoreUI() {
    highScoreEl.textContent = 'High Score: ' + highScore;
}

function saveHighScore(newScore) {
    highScore = newScore;
    localStorage.setItem('snakeHighScore', highScore);
    updateHighScoreUI();
}

function showHighScorePopup(score) {
    popupScore.textContent = `You scored ${score} points!`;
    popup.style.display = 'flex';
}

function hideHighScorePopup() {
    popup.style.display = 'none';
}

function initGame() {
    snake = [
        { x: 9, y: 10 },
        { x: 8, y: 10 },
        { x: 7, y: 10 }
    ];
    direction = 'RIGHT';
    nextDirection = 'RIGHT';
    placeFood();
    score = 0;
    isGameOver = false;
    isNewHighScore = false;
    scoreEl.textContent = 'Score: 0';
    restartBtn.style.display = 'none';
    hideHighScorePopup();
    clearInterval(gameInterval);
    gameInterval = setInterval(gameLoop, speed);
    updateHighScoreUI();
}

function placeFood() {
    while (true) {
        food = {
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize)
        };
        if (!snake.some(segment => segment.x === food.x && segment.y === food.y)) break;
    }
}

function gameLoop() {
    direction = nextDirection;
    const head = { ...snake[0] };
    if (direction === 'LEFT') head.x -= 1;
    if (direction === 'RIGHT') head.x += 1;
    if (direction === 'UP') head.y -= 1;
    if (direction === 'DOWN') head.y += 1;

    // Edge wrapping
    if (head.x < 0) head.x = gridSize - 1;
    if (head.x >= gridSize) head.x = 0;
    if (head.y < 0) head.y = gridSize - 1;
    if (head.y >= gridSize) head.y = 0;

    // Check collision with self
    if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        endGame();
        return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreEl.textContent = 'Score: ' + score;
        eatSound.currentTime = 0;
        eatSound.play();
        if (score > highScore) {
            isNewHighScore = true;
        }
        placeFood();

        // Increase speed (decrease interval) but not below minSpeed
        speed = Math.max(minSpeed, speed - speedStep);
        speedRange.value = speed;
        speedValue.textContent = speed;
        clearInterval(gameInterval);
        gameInterval = setInterval(gameLoop, speed);
    } else {
        snake.pop();
    }

    draw();
}

function draw() {
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ff0000';
    ctx.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? '#00ff00' : '#00cc00';
        ctx.fillRect(snake[i].x * tileSize, snake[i].y * tileSize, tileSize, tileSize);
        ctx.strokeStyle = '#111';
        ctx.strokeRect(snake[i].x * tileSize, snake[i].y * tileSize, tileSize, tileSize);
    }
}

function endGame() {
    clearInterval(gameInterval);
    isGameOver = true;
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.fillRect(0, canvas.height / 2 - 40, canvas.width, 80);
    ctx.fillStyle = '#fff';
    ctx.font = '32px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);
    ctx.font = '20px monospace';
    ctx.fillText('Score: ' + score, canvas.width / 2, canvas.height / 2 + 30);
    restartBtn.style.display = 'inline-block';

    if (score > highScore) {
        saveHighScore(score);
        showHighScorePopup(score);
        highScoreSound.currentTime = 0;
        highScoreSound.play();
    } else {
        gameOverSound.currentTime = 0;
        gameOverSound.play();
    }
}

document.addEventListener('keydown', e => {
    if (isGameOver && (e.key === 'Enter' || e.key === ' ')) {
        initGame();
        return;
    }
    if (isGameOver) return;
    if (e.key === 'ArrowLeft' || e.key === 'a') {
        if (direction !== 'RIGHT') nextDirection = 'LEFT';
    } else if (e.key === 'ArrowUp' || e.key === 'w') {
        if (direction !== 'DOWN') nextDirection = 'UP';
    } else if (e.key === 'ArrowRight' || e.key === 'd') {
        if (direction !== 'LEFT') nextDirection = 'RIGHT';
    } else if (e.key === 'ArrowDown' || e.key === 's') {
        if (direction !== 'UP') nextDirection = 'DOWN';
    }
});

restartBtn.addEventListener('click', initGame);

speedRange.addEventListener('input', function () {
    speed = Number(speedRange.value);
    speedValue.textContent = speed;
    if (!isGameOver) {
        clearInterval(gameInterval);
        gameInterval = setInterval(gameLoop, speed);
    }
});

closePopupBtn.addEventListener('click', function () {
    hideHighScorePopup();
    initGame();
});

// Show initial speed value
speedValue.textContent = speed;

// Show initial high score
updateHighScoreUI();

initGame();
