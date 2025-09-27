function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
  if (jugada === 1) return "Piedra";
  if (jugada === 2) return "Papel";
  if (jugada === 3) return "Tijeras";
  return "Mal elegido";
}

// 1 piedra, 2 papel, 3 tijeras
let triunfos = 0;
let perdidas = 0;

while (triunfos < 3 && perdidas < 3) {
  const pc = aleatorio(1, 3);
  const input = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijeras");
  const jugador = Number(input);

  if (![1,2,3].includes(jugador)) {
    alert("Entrada no válida. Intenta de nuevo.");
    continue;
  }

  alert("PC elige: " + eleccion(pc));
  alert("Tú eliges: " + eleccion(jugador));

  if (pc === jugador) {
    alert("EMPATE");
  } else if (
    (jugador === 1 && pc === 3) ||
    (jugador === 2 && pc === 1) ||
    (jugador === 3 && pc === 2)
  ) {
    alert("GANASTE");
    triunfos++;
  } else {
    alert("PERDISTE");
    perdidas++;
  }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.");
