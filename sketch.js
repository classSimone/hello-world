let elena, ghost;
let centro;
let img, imgElena, imgBkg;
let vite;

let controllers = {};
window.addEventListener("gamepadconnected", (e) => controllers[e.gamepad.index] = e.gamepad);
window.addEventListener("gamepaddisconnected", (e) => delete controllers[e.gamepad.index]);
let controller = new p5.Vector(0,0);

function preload() {
  img = loadImage('assets/ghost.png');
  imgElena = loadImage('assets/elena.png');
  imgBkg = loadImage('assets/sfondo_02.jpg');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  centro = new createVector(width/2, height/2);
  splash();
  ghost=new Ghost (img, 0);
  elena=new actor (imgElena, 1);
  vite=3;
}

function splash(){
background(255,200,200);
textAlign(CENTER);
textSize(50);
fill('red');
textStyle(BOLD);
text('SUPERELENA', centro.x, centro.y);

}

function draw() {
  // put drawing code here
  translate(centro.x,centro.y);
  background(75);
  background(imgBkg);
  let gravity = createVector(0, 0.4);

  readGamePad(0);
  ghost.applyForce(readGamePad(0));
  ghost.applyForce(gravity);
  ghost.update(elena.position);
  ghost.display();
  ghost.checkEdges();

  let accX=map(accelerationX, -90, 90, -1, 1);
  let accY=map(accelerationY, -90, 90, -1, 1);

  let orientation = new createVector(accX,accY);
  elena.appltForce(orientation)
  elena.applyForce(readGamePad(1));
  elena.applyForce(gravity);
  elena.update();
  elena.display();
  elena.checkEdges();

  if (elena.intersects(ghost)){
    textSize(32);
    textAlign(CENTER);
    ellipse(0, 0, 50, 50);
    text("Sei morta. Hai " + vite + " vite", 0, 0);
    if (vite==0){
      vite=10;
    }else{
      vite-=1;
    }
    elena.position.x=-200;
    ghost.position.x=200;
  }
textSize(32);
text ('vite residue: ' + vite, -width/2 + 100, - height/2 + 60);
}


function readGamePad(id){
  let padVector=new createVector(0, 0);
  let gamepads = navigator.getGamepads();
  padVector.x = gamepads[id].axes[0]*1;
  padVector.y = gamepads[id].axes[1]*1;

  return padVector;

  if (gamepads[id].buttons[0].pressed) {
    //

  } else {
    //

  }

}
