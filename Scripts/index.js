import { Pale } from './Models/pale';
import { Map } from './Models/map';
import { Player } from './Models/player';
import { MoveControlPanel } from './Models/move-control-panel';

require('./Components/all-component')();
var utils = require('./utils');

document.querySelector('a-scene').addEventListener('loaded', function () {
  var player = new Player({ x: 0, y: 0, z: 2 }, );
  var scene = document.querySelector('a-scene');
  scene.appendChild(player.el);

  var startPale = new Pale(0.5, 5, 5);
  startPale.src = "#start";
  startPale.position = { x: 0, y: -2, z: 2 };
  startPale.element.setAttribute('position', startPale.position);
  startPale.element.setAttribute('src', startPale.src);
  startPale.element.setAttribute('color', '');
  scene.appendChild(startPale.element);

  var observer = scene.components.observer;
  observer.player = player;

  scene.addEventListener('menuclicked', function () {
    var map = new Map();
    map.generateMap();
    scene.Pales = map.Pales;
    $("#startGame").remove();
    startPale.element.setAttribute('move', 'way: OneWay ; velocity : 0 2 0; to : 0 3 0');
    player.isMoveEnabled = true;
    player.el.components.player.player = player;
    observer.createMoveControl(player.position);
  });

  var lava_plane = document.getElementById("lavaPlane");
  player.el.addEventListener('collide', function (e) {
    if (e.detail.body.id == lava_plane.body.id && !player.end) {
      observer.removeMovceControl();
      scene.setAttribute("fog", "type: exponential; density: 0.5");
      var camera = player.camera;
      var lose_text = document.getElementById("go_text");
      lose_text.setAttribute("visible", true);
      player.isMoveEnabled = false;
      var pos = new THREE.Vector3(player.el.body.position.x, player.el.body.position.y, player.el.body.position.z);
      var lookAtVector = new THREE.Vector3(0, 0, -1);
      lookAtVector.applyQuaternion(camera.object3D.quaternion);
      var quaternion = new THREE.Quaternion();
      lookAtVector.y = 0;
      var cameraAngle = lookAtVector.angleTo(new THREE.Vector3(0, 0, -1));
      quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), cameraAngle);
      pos.applyQuaternion(quaternion);
      //pos.x -= 3;
      pos.z -= 3;
      var y = utils.toDegree(cameraAngle);
      if (pos.x > 0) {
        lose_text.setAttribute("rotation", { x: 0, y: -y, z: 0 });
      } else {
        lose_text.setAttribute("rotation", { x: 0, y: y, z: 0 });
      }


      player.el.body.position.set(0, 1, -2);
      player.camera.object3D.quaternion.set(0, 0, 0, 1);
      player.end = true;

      lose_text.setAttribute('position', "-2 0 -4");
      scene.appendChild(lose_text);
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyW') {
      player.moving = true;
      player.isContinousMoving = true;
    }
  });
  document.addEventListener('keyup', function (event) {
    if (event.code == 'KeyW') {
      player.moving = false;
      player.isContinousMoving = false;
    }
  });
});


var testObject = document.getElementById('testObject');

