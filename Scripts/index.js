import { Pale } from './Models/pale';
import { Map } from './Models/map';
import { Player } from './Models/player';
import { MoveControlPanel } from './Models/move-control-panel';
require('./Components/all-component')();
$(function () {
  var player = new Player({ x: 0, y: 0, z: 0 }, );
  var whiteMask = document.getElementById('whiteLoadingMask');
  var greenMask = document.getElementById('greenLoadingMask');
  var startPale = new Pale(0.5, 5, 5);
  var scene = document.querySelector('a-scene');
  scene.appendChild(player.el);
  startPale.src = "#start";
  startPale.position = { x: 0, y: -2, z: 2 };
  startPale.element.setAttribute('position', startPale.position);
  startPale.element.setAttribute('src', startPale.src);
  startPale.element.setAttribute('color', '');
  scene.appendChild(startPale.element);
  scene.addEventListener('menuclicked', function () {
    var map = new Map();
    map.generateMap();
    scene.Pales = map.Pales;
    $("#startGame").remove();
    startPale.element.setAttribute('move', 'way: OneWay ; velocity : 0 2 0; to : 0 3 0');
    player.isMoveEnabled = true;
  });
  document.player = player;
  document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyW') {
      player.moving = true;
    }
  });
  // var lava_plane = document.getElementById("lavaPlane");
  // player.addEventListener('collide', function (e) {
  //   if (e.detail.body.id == lava_plane.body.id) {
  //    // scene.setAttribute("fog", "type: exponential; density: 1");
  //    var camera = document.querySelector('a-camera');
  //     var lose_text = document.createElement('a-text');
  //     lose_text.setAttribute("value", "GAME OVER");
  //     lose_text.setAttribute("color", "white");
  //     var i;
  //     // for (i = 0; i < scene.Pales.length; i++) {
  //     //   scene.Pales[i].element.pause();
  //     // }
  //     player.components.player.gamestarted = false;
  //       lose_text.setAttribute('height', 10);
  //        lose_text.setAttribute('width', 10);
  //        var pos = player.body.position;
  //      var lookAtVector = new THREE.Vector3(0, 0, -1);
  //     lookAtVector.applyQuaternion(camera.object3D.quaternion);
  //      ['x', 'y', 'z'].forEach(function (axis) {
  //               pos[axis] += lookAtVector[axis];
  //           });
  //     lose_text.setAttribute('position',pos );
  //     scene.appendChild(lose_text);

  //   }

  // });
  var testObject = document.getElementById('testObject');
});

