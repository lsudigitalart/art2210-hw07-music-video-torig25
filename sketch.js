let mySong;
let ellipseColor;

function preload() {
  mySong = loadSound('Heavybeats.mp3');
}
function mousePressed() {
  mySong.play();
}



function setup() {
  createCanvas(600, 600);


  //Ellipsecolor
ellipseColor = color(random(255), random(255), random(255));
  frameRate(55);
}




function draw() {
    background(0);
 

  //Ellipses
  for (let i = 0; i < 10; i++) {
    let x = 20 + i * 80;
    let y = 300;
    let diameter = 80;
    ellipse(x, y, diameter, diameter);
  }

  for (let i = 0; i < 10; i++) {
    let x = 20 + i * 80;
    let y = 100;
    let diameter = 40;
    ellipse(x, y, diameter, diameter);
  }

  for (let i = 0; i < 10; i++) {
    let x = 20 + i * 80;
    let y = 500;
    let diameter = 40;
    ellipse(x, y, diameter, diameter);
  }

  for (let i = 0; i < 20; i++) {
    let x = 20 + i * 40;
    let y = 400;
    let diameter = 20;
    ellipse(x, y, diameter, diameter);
  }

  for (let i = 0; i < 20; i++) {
    let x = 20 + i * 40;
    let y = 200;
    let diameter = 20;
    ellipse(x, y, diameter, diameter);
  }

  //Framerate colorchange
  if (frameCount % 55 == 0) {
    ellipseColor = color(random(255), random(255), random(255));
  }

  fill(ellipseColor);
  noStroke();







}