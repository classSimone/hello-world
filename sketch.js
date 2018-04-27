let elena, ghost;
let centro;
let img, imgElena, imgBkg;

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
  centro = new createVector(width/2, height/2);
  ghost=new actor (img);
  elena=new actor (imgElena);
}

function draw() {
  // put drawing code here
  translate(centro.x,centro.y);
  background(75);
  background(imgBkg);
  let gravity = createVector(0, 0.1);

  //readGamePad(0);
  //ghost.applyForce(controller);
  ghost.applyForce(gravity);
  ghost.update();
  ghost.display();
  ghost.checkEdges();

  //elena.applyForce(controller);
  elena.applyForce(gravity);
  elena.update();
  elena.display();
  elena.checkEdges();

}


function readGamePad(id){

  let gamepads = navigator.getGamepads();
  controller.x = gamepads[id].axes[0]*1;
  controller.y = gamepads[id].axes[1]*1;

  if (gamepads[id].buttons[0].pressed) {
    //

  } else {
    //

  }

}
