window.webvr = window.webvr || {};
$(function () {

  var whiteMask = document.getElementById('whiteLoadingMask');
  var greenMask = document.getElementById('greenLoadingMask');
  var startPale = new Pale(0.5, 5, 5);
  var sceneEl = document.querySelector('a-scene');

  startPale.src = "#start";
  startPale.position = { x: 0, y: -2, z: 2 };
  startPale.element.setAttribute('position', startPale.position);
  startPale.element.setAttribute('src', startPale.src);
  startPale.element.setAttribute('color', '');
  sceneEl.appendChild(startPale.element);
  sceneEl.addEventListener('menuclicked', function () {
    var map = new Map();
    map.generateMap();
    $("#startGame").remove();
    startPale.element.setAttribute('move', 'way: OneWay ; velocity : 0 2 0; to : 0 3 0');
    player.components.player.gamestarted = true;
  });
  var player = document.getElementById('player');
  document.addEventListener('keydown', function (event) {
    if(event.code == 'KeyW'){
      player.components.player.wpressed = true;
    }
  });

  var testObject = document.getElementById('testObject');
});
