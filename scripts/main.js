// Archivo principal de JavaScript para el sitio web de arte
let naruto;
let posX, posY;

function setup() {
    createCanvas(windowWidth, windowHeight);
    posX = width / 2;
    posY = height / 2;
    naruto = new Naruto();
}

function draw() {
    background(0);
    naruto.update();
    naruto.display();
}

class Naruto {
    constructor() {
        this.size = 50;
        this.color = color(255, 0, 0);
    }

    update() {
        if (keyIsDown(UP_ARROW)) {
            posY -= 5;
        }
        if (keyIsDown(DOWN_ARROW)) {
            posY += 5;
        }
        if (keyIsDown(LEFT_ARROW)) {
            posX -= 5;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            posX += 5;
        }
    }

    display() {
        fill(this.color);
        ellipse(posX, posY, this.size);
        this.animateText();
    }

    animateText() {
        fill(255);
        textSize(32);
        textAlign(CENTER);
        text("Naruto Cyberpunk", posX, posY - 60);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}