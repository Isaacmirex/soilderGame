var p1BoxContainer = document.querySelector('#player1Board .box-container');
var p2BoxContainer = document.querySelector('#player2Board .box-container');
var p1Soldiers = []; // almacenar posiciones de soldados del jugador 1
var p2Soldiers = []; // almacenar posiciones de soldados del jugador 2
var currentPlayer = 1;
var p1Score = 0;
var p2Score = 0;

// Generar cajas para el tablero del jugador 1
for (var i = 1; i <= 100; i++) {
  var box = document.createElement('div');
  box.setAttribute('id', 'p1box' + i);
  box.setAttribute('class', 'box');
  box.addEventListener('click', boxClicked);
  p1BoxContainer.appendChild(box);
}

// Generar cajas para el tablero del jugador 2
for (var i = 1; i <= 100; i++) {
  var box = document.createElement('div');
  box.setAttribute('id', 'p2box' + i);
  box.setAttribute('class', 'box');
  box.addEventListener('click', boxClicked);
  p2BoxContainer.appendChild(box);
}
function resetSoldierColors(playerSoldiers) {
  playerSoldiers.forEach(function(soldierId) {
    var soldierBox = document.getElementById(soldierId);
    if (soldierBox) {
      soldierBox.style.backgroundColor = 'lightblue';
    }
  });
}

// Función para manejar el clic de las cajas
function boxClicked(event) {
  var box = event.target;
  if (currentPlayer === 1) {
    if (p1Soldiers.length < 10) {
      if (!p1Soldiers.includes(box.id)) {
        p1Soldiers.push(box.id);
        box.style.backgroundColor = 'green';
        if (p1Soldiers.length === 10) {
          resetSoldierColors(p1Soldiers);
        }
      }
    } else {
      if (p2Soldiers.includes(box.id) && box.style.backgroundColor !== 'red') {
        box.style.backgroundColor = 'red';
        p1Score++;
        document.getElementById('p1Score').textContent = p1Score;
      } else if (!p1Soldiers.includes(box.id) && !p2Soldiers.includes(box.id)) {
        box.style.backgroundColor = 'gray';
        currentPlayer = 2;
      }
    }
  } else {
    if (p2Soldiers.length < 10) {
      if (!p2Soldiers.includes(box.id)) {
        p2Soldiers.push(box.id);
        box.style.backgroundColor = 'green';
        if (p2Soldiers.length === 10) {
          resetSoldierColors(p2Soldiers);
        }
      }
    } else {
      if (p1Soldiers.includes(box.id) && box.style.backgroundColor !== 'red') {
        box.style.backgroundColor = 'red';
        p2Score++;
        document.getElementById('p2Score').textContent = p2Score;
      } else if (!p1Soldiers.includes(box.id) && !p2Soldiers.includes(box.id)) {
        box.style.backgroundColor = 'gray';
        currentPlayer = 1;
      }
    }
  }
}

// Función para manejar el clic del botón "Comenzar juego"
document.getElementById('startBtn').addEventListener('click', function() {
  // Reiniciar los tableros
  p1Soldiers = [];
  p2Soldiers = [];
  currentPlayer = 1;
  p1Score = 0;
  p2Score = 0;
  document.querySelectorAll('.box').forEach(function(box) {
    box.style.backgroundColor = 'lightblue';
  });
  document.getElementById('p1Score').textContent = p1Score;
  document.getElementById('p2Score').textContent = p2Score;
});




