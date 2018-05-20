import { Pale } from './Models/pale';
import { Map } from './Models/map';
import { Player } from './Models/player';
import { MoveControlPanel } from './Models/move-control-panel';
import { SceneBuilder } from '../Scripts/SceneBuilder'
require('./Components/all-component')();
var utils = require('./utils');

document.querySelector('a-scene').addEventListener('loaded', function () {
  var consts = require('./constants');

  var scene = getScene();
  var body = document.getElementById('body');
  body.addEventListener(consts.events.menuclicked, function (e) {
    window.location.href = '/?level=' + e.detail.menu_item_id;
  });
  body.addEventListener(consts.events.gameover, function () {
    window.location.href = '/?level=gameover';
  });
  body.addEventListener(consts.events.wingame, function () {
    window.location.href = '/?level=wingame';
  });
  console.log();
});

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getScene() {

  var levelname = getParameterByName('level');
  if (!levelname) {
    var menuScene = require("../Scenes/menuScene");
    var builder = new SceneBuilder(menuScene.scene);
    builder.build();
  }
  if (levelname == 'level1') {
    var level1scene = require("../Scenes/Levels/level1");
    var builder = new SceneBuilder(level1scene.scene);
    builder.build();
  }
  if (levelname == 'level2') {
    var level2scene = require("../Scenes/Levels/level2");
    var builder = new SceneBuilder(level2scene.scene);
    builder.build();
  }
  if (levelname == 'gameover') {
    var gameOverScene = require("../Scenes/gameoverscene");
    var builder = new SceneBuilder(gameOverScene.scene);
    builder.build();
  }
  if (levelname == 'wingame') {
    var wingameScene = require("../Scenes/wingamescene");
    var builder = new SceneBuilder(wingameScene.scene);
    builder.build();
  }
}
