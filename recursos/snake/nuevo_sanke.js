
document.addEventListener("DOMContentLoaded", function () {

    const tablero = document.querySelector(".tablero"); // Selecciona el tablero
    const columnas = 9;
    const filas = 9;
    var direccion = "derecha"; // Dirección inicial de la serpiente
    var snake = [{ row: 1, col: 1 }]; // Posición inicial de la serpiente
    var fruta = { row: 0, col: 0 }; // Posición inicial de la fruta
    var moveInterval;
    var newDirection = direccion; // Nueva dirección que será aplicada después del movimiento
    var inicio = document.querySelector('.Inicar');
   
    function coord(fila, columna) {
        return fila.toString() + columna.toString(); // Genera un ID único para cada celda basado en su fila y columna
    }
    
    // Crear la cuadrícula
    for (let fila = 1; fila <= filas; fila++) {
        for (let columna = 1; columna <= columnas; columna++) {
            let celda = document.createElement('div');
            celda.classList.add('pos'); // Agrega la clase 'pos' a cada celda
            celda.id = coord(fila, columna); // Establece el ID de la celda
            tablero.appendChild(celda); // Añade la celda al tablero
        }
    }

    function generarFruta() {
        let frutaValida = false;
        while (!frutaValida) { // Asegura que la fruta no aparezca en la misma posición que la serpiente y FUFA
            let fila = Math.floor(Math.random() * filas) + 1;
            let col = Math.floor(Math.random() * columnas) + 1;
            fruta = { row: fila, col: col };
            frutaValida = !snake.some(segment => segment.row === fruta.row && segment.col === fruta.col);
        }
    }

    function move() {
        let head = snake[0];
        let newHead = { row: head.row, col: head.col };
        head = document.querySelector("head-snake");


        direccion = newDirection; // Actualiza la dirección de movimiento con la nueva dirección

        // Cambia la posición de la cabeza de la serpiente basada en la dirección
        if (direccion === "arriba") {
            newHead.row--;
        } else if (direccion === "abajo") {
            newHead.row++;
        } else if (direccion === "derecha") {
            newHead.col++;
        } else if (direccion === "izquierda") {
            newHead.col--;
        }

        // Verifica colisiones con los bordes del tablero y con el propio cuerpo de la serpiente
        if (newHead.row < 1 || newHead.row > filas || newHead.col < 1 || newHead.col > columnas ||
            snake.some(segment => segment.row === newHead.row && segment.col === newHead.col)) {
            clearInterval(moveInterval); // Detiene el juego
            alert("Game over!"); // Muestra mensaje de fin de juego
            return;
        }

        snake.unshift(newHead); // Añade la nueva cabeza al inicio de la serpiente

        // Si la serpiente encuentra una fruta, se genera una nueva
        if (newHead.row === fruta.row && newHead.col === fruta.col) {
            generarFruta();
        } else {
            snake.pop(); // Elimina la cola de la serpiente si no hay fruta
        }
    }

    function actualizar() {
        document.querySelectorAll('.pos').forEach(celda => {
            celda.classList.remove('snake');
            celda.classList.remove("head-snake");
            celda.classList.remove('fruta'); // Elimina las clases 'snake' y 'fruta' de todas las celdas
        });

        snake.forEach(coordenada => {
            let id = coord(coordenada.row, coordenada.col);
            let celda = document.getElementById(id);
            if (coordenada === snake[0]) {
                celda.classList.add('head-snake'); // Añade al principio la cabeza de la serpiente de otro color
                console.log(`Cabeza de la serpiente en la celda: ${id}`); // Depuración
            } else {
                celda.classList.add('snake'); // Añade la clase 'snake' a las celdas ocupadas por la serpiente

            }
        });

        let frutaCelda = document.getElementById(coord(fruta.row, fruta.col));
        if (frutaCelda) {
            frutaCelda.classList.add('fruta'); // Añade la clase 'fruta' a la celda que contiene la fruta
        }
    }

    addEventListener('keydown', function (event) {
        // Cambia la dirección basada en la tecla presionada
        switch (event.key) {
            case 'ArrowUp':
                if (direccion !== "abajo") newDirection = "arriba";
                break;
            case 'ArrowDown':
                if (direccion !== "arriba") newDirection = "abajo";
                break;
            case 'ArrowLeft':
                if (direccion !== "derecha") newDirection = "izquierda";
                break;
            case 'ArrowRight':
                if (direccion !== "izquierda") newDirection = "derecha";
                break;
        }
    });

    function gameLoop() {
        move(); // Mueve la serpiente
        actualizar(); // Actualiza el tablero
    }

    function iniciarJuego() {
        snake = [{ row: 1, col: 1 }]; // Reinicia la posición de la serpiente
        direccion = "derecha"; // Reinicia la dirección
        newDirection = direccion;
        generarFruta(); // Genera una nueva fruta
        actualizar(); // Actualiza el tablero
        clearInterval(moveInterval); // Limpia cualquier intervalo anterior
        moveInterval = setInterval(gameLoop, 500); // Establece el intervalo para el bucle del juego
    }
    inicio.addEventListener("click", iniciarJuego);
});