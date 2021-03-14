let time = 0;
let wave = [];

let slider;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    translate(150, 200);

    let x = 0;
    let y = 0;

    for (let i = 0; i < 5000; i++) {
        let prevx = x;
        let prevy = y;

        let n = i + 1;
        let radius = 75 * (4 / (n * PI));
        radius *= -1
        x += radius * cos(n * time);
        y += radius * sin(n * time);

        stroke(255, 100);
        noFill();

        stroke(255);
        line(prevx, prevy, x, y);
    }
    wave.unshift(y);

    translate(200, 0);
    line(x - 200, y, 0, wave[0]);
    beginShape();
    noFill();
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();

    time += 0.05;

    if (wave.length > 250) {
        wave.pop();
    }
}