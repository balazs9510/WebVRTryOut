window.webvr = window.webvr || {};
$(function () {

  var whiteMask = document.getElementById('whiteLoadingMask');
  var greenMask = document.getElementById('greenLoadingMask');
  var startPale = new Pale(0.5, 5, 5);
  var sceneEl = document.querySelector('a-scene');

  startPale.src = "#start";
  startPale.position = { x: 0, y: -2, z: 2 };
  sceneEl.appendChild(startPale.element);
});
