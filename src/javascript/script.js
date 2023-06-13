let p1;
let p2;
const SPEED_P = 5;
const STOP_P = 0;
let ballM;

let point_p1 = "0";
let point_p2 = "0";
let spaceBetween = 10;
let yText = 40;

function setup() {
    createCanvas(windowWidth, windowHeight);
    p1 = new Paddle(true);
    p2 = new Paddle(false);
    ball = new Ball();

}

function draw() {
    background(0);
    p1.draw();
    p2.draw();
    ball.draw();

    checkCollision_P1();
    checkCollision_P2();
    puntos_p1();
    puntos_p2();

    p1.update();
    p2.update();
    ball.move();
    ball.edge();

    textSize(32);
    textAlign(CENTER);
    fill(255);
    var x1 = (windowWidth - textWidth("[ Player 1: " + point_p1 + "]")) / 2;
    var x2 = x1 + textWidth("[ Player 2: " + point_p1 + "]") + spaceBetween;
    text("[ Player 1:" + point_p1 + "]", x1, yText);
    text("[ Player 2:" + point_p2 + "]", x2, yText);

}

function keyReleased(){
    p1.move(STOP_P);
    p2.move(STOP_P);
}

function keyPressed(){
    const P1_UP = 87;
    const P1_DOWN = 83;

    if(keyCode === P1_UP){
        p1.move(-SPEED_P);
    }else if(keyCode === P1_DOWN){
        p1.move(SPEED_P);
    }

    if(keyCode === UP_ARROW){
        p2.move(-SPEED_P);
    }else if(keyCode === DOWN_ARROW){
        p2.move(SPEED_P);
    }
}

function checkCollision_P1() {
    if (ball.x - ball.r <= p1.x + p1.w / 2 && ball.y >= p1.y - p1.h / 2 && ball.y <= p1.y + p1.h / 2) {
        ball.stepX = abs(ball.stepX);
    }
}

function checkCollision_P2() {
    if (ball.x + ball.r >= p2.x - p2.w / 2 && ball.y >= p2.y - p2.h / 2 && ball.y <= p2.y + p2.h / 2) {
        ball.stepX = -abs(ball.stepX);
    }
}
function puntos_p1() {
    if (ball.x + ball.r >= width) {
        point_p1++;
        if (point_p1 >= 10) {
            terminarJuego();
        } else {
            ball.reset();
        }
    }
}

function puntos_p2() {
    if (ball.x - ball.r <= 25) {
        point_p2++;
        if (point_p2 >= 10) {
            terminarJuego();
        } else {
            ball.reset();
        }
    }
}

function terminarJuego() {
    let ganador = "";
    if (point_p1 >= 4) {
        ganador = "¡Jugador 1 ha ganado!";
    } else if (point_p2 >= 4) {
        ganador = "¡Jugador 2 ha ganado!";
    }

    point_p1 = 0;
    point_p2 = 0;

    p1 = new Paddle(true);
    p2 = new Paddle(false);

    ball.reset();

    if (ganador !== "") {
        textSize(32);
        textAlign(CENTER);
        fill(255);
        text(ganador, width / 2, height / 2);
        textSize(16);
        text("Presiona la tecla SPACE para reiniciar el juego", width / 2, height / 2 + 40);
    }
}
