
var controllers = {};
window.addEventListener("gamepadconnected", (e) => controllers[e.gamepad.index] = e.gamepad);
window.addEventListener("gamepaddisconnected", (e) => delete controllers[e.gamepad.index]);

let controller = new p5.Vector(0,0);

function readGamePad(id){

  var gamepads = navigator.getGamepads();
  for (var i = 0; i < gamepads.length; i++) {
    if (gamepads[i]) {
      if (!(gamepads[i].index in controllers)) {
        addgamepad(gamepads[i]);
      } else {
        controllers[gamepads[i].index] = gamepads[i];
      }
    }
  }

  if (gamepads[0].buttons[0].pressed) {
    //

  } else {
    //

  }
  //
  controller.x= gamepads[0].axes[0]*3;
  controller.y= gamepads[0].axes[1]*3;


}
