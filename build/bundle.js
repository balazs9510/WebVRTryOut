/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Scenes/Levels/level1.json":
/*!***********************************!*\
  !*** ./Scenes/Levels/level1.json ***!
  \***********************************/
/*! exports provided: scene, default */
/***/ (function(module) {

eval("module.exports = {\"scene\":{\"attributes\":[{\"name\":\"physics\",\"value\":\"\"},{\"name\":\"observer\",\"value\":\"\"}],\"assets\":[{\"type\":\"img\",\"src\":\"../Images/hole.jpg\",\"id\":\"levelOneLavaTexture\"},{\"type\":\"img\",\"src\":\"../Images/universe.jpg\",\"id\":\"levelOneSkyTexture\"},{\"type\":\"img\",\"src\":\"../Images/start.png\",\"id\":\"levelOneStartTexture\"},{\"type\":\"img\",\"src\":\"../Images/finish.jpg\",\"id\":\"levelOneFinishTexture\"},{\"type\":\"img\",\"src\":\"../Images/mcparrow-active.png\",\"id\":\"arrow-active\"},{\"type\":\"img\",\"src\":\"../Images/mcparrow-inactive.png\",\"id\":\"arrow-inactive\"}],\"ground\":{\"src\":\"#levelOneLavaTexture\",\"color\":\"green\",\"id\":\"levelOneGround\",\"height\":30,\"width\":30,\"position\":\"0 -1 0\"},\"sky\":{\"src\":\"#levelOneSkyTexture\",\"id\":\"levelOneSky\",\"radius\":10},\"paleData\":{\"width\":3,\"height\":0.5,\"depth\":3,\"colors\":[\"#1a1e41\",\"#2ed73a\",\"#d22d2d\",\"#0b133a\",\"#d0f271\"]},\"pales\":[{\"src\":\"#levelOneStartTexture\",\"position\":\"0 2 2\"},{\"position\":\"0 2 -1\",\"velocity\":\"-1\"},{\"src\":\"#levelOneFinishTexture\",\"position\":\"0 2 -4\",\"flags\":[\"-1.3 4 -2.8\",\"1.3 4 -2.8\",\"0 5.2 -2.8\"]}],\"player\":{\"position\":\"0 2.5 2\",\"targetZ\":-2.8}}};\n\n//# sourceURL=webpack:///./Scenes/Levels/level1.json?");

/***/ }),

/***/ "./Scenes/Levels/level2.json":
/*!***********************************!*\
  !*** ./Scenes/Levels/level2.json ***!
  \***********************************/
/*! exports provided: scene, default */
/***/ (function(module) {

eval("module.exports = {\"scene\":{\"attributes\":[{\"name\":\"physics\",\"value\":\"\"},{\"name\":\"observer\",\"value\":\"\"}],\"assets\":[{\"type\":\"img\",\"src\":\"../Images/lava.jpg\",\"id\":\"levelOneLavaTexture\"},{\"type\":\"img\",\"src\":\"../Images/sky.jpg\",\"id\":\"levelOneSkyTexture\"},{\"type\":\"img\",\"src\":\"../Images/start.png\",\"id\":\"levelOneStartTexture\"},{\"type\":\"img\",\"src\":\"../Images/finish.jpg\",\"id\":\"levelOneFinishTexture\"},{\"type\":\"img\",\"src\":\"../Images/mcparrow-active.png\",\"id\":\"arrow-active\"},{\"type\":\"img\",\"src\":\"../Images/mcparrow-inactive.png\",\"id\":\"arrow-inactive\"}],\"ground\":{\"src\":\"#levelOneLavaTexture\",\"color\":\"green\",\"id\":\"levelOneGround\",\"height\":50,\"width\":50,\"position\":\"0 -1 0\"},\"sky\":{\"src\":\"#levelOneSkyTexture\",\"id\":\"levelOneSky\",\"radius\":25},\"paleData\":{\"width\":5,\"height\":0.5,\"depth\":5,\"colors\":[\"#1a1e41\",\"#2ed73a\",\"#d22d2d\",\"#0b133a\",\"#d0f271\"]},\"pales\":[{\"src\":\"#levelOneStartTexture\",\"position\":\"0 2 15\"},{\"position\":\"0 2 10\",\"velocity\":\"-3\"},{\"position\":\"0 2 5\",\"velocity\":\"4\"},{\"position\":\"0 2 0\",\"velocity\":\"-1\"},{\"position\":\"0 2 -5\",\"velocity\":\"1\"},{\"position\":\"0 2 -10\",\"velocity\":\"-2\"},{\"src\":\"#levelOneFinishTexture\",\"position\":\"0 2 -15\",\"flags\":[\"-2 4 -13\",\"2 4 -13\",\"0 5.2 -13\"]}],\"player\":{\"position\":\"0 2.5 15\",\"targetZ\":-13}}};\n\n//# sourceURL=webpack:///./Scenes/Levels/level2.json?");

/***/ }),

/***/ "./Scenes/gameoverscene.json":
/*!***********************************!*\
  !*** ./Scenes/gameoverscene.json ***!
  \***********************************/
/*! exports provided: scene, default */
/***/ (function(module) {

eval("module.exports = {\"scene\":{\"ground\":{\"width\":20,\"height\":20,\"color\":\"black\"},\"sky\":{\"color\":\"black\",\"radius\":10},\"items\":[{\"type\":\"a-text\",\"attributes\":[{\"name\":\"value\",\"value\":\"YOU DIED\"},{\"name\":\"color\",\"value\":\"red\"},{\"name\":\"align\",\"value\":\"center\"},{\"name\":\"position\",\"value\":\"1 2 -2\"},{\"name\":\"width\",\"value\":\"15\"},{\"name\":\"height\",\"value\":\"10\"}]}],\"camera\":{\"id\":\"gameOverCamera\",\"position\":\"0 0 2\",\"attributes\":[{\"name\":\"wasd-controls\",\"value\":\"enabled:false\"}]},\"menu_items\":[{\"text\":\"Back to menu\",\"id\":\"\",\"position\":\"1 2 6\",\"rotation\":\"0 -180 0\"}]}};\n\n//# sourceURL=webpack:///./Scenes/gameoverscene.json?");

/***/ }),

/***/ "./Scenes/menuScene.json":
/*!*******************************!*\
  !*** ./Scenes/menuScene.json ***!
  \*******************************/
/*! exports provided: scene, default */
/***/ (function(module) {

eval("module.exports = {\"scene\":{\"assets\":[{\"type\":\"img\",\"src\":\"../Images/grid.jpg\",\"id\":\"menuSceneGroundTexture\"}],\"ground\":{\"src\":\"#menuSceneGroundTexture\",\"color\":\"green\",\"id\":\"menuSceneGround\",\"height\":30,\"width\":30,\"position\":\"0 0 0\"},\"sky\":{\"color\":\"green\",\"id\":\"menuSceneSky\",\"radius\":10},\"menu_items\":[{\"text\":\"Level 1\",\"id\":\"level1\",\"position\":\"-4 3 -5\"},{\"text\":\"Level 2\",\"id\":\"level2\",\"position\":\"-4 1 -5\"}],\"camera\":{\"id\":\"menuSceneCamera\",\"position\":\"0 0 2\",\"attributes\":[{\"name\":\"wasd-controls\",\"value\":\"enabled:false\"}]}}};\n\n//# sourceURL=webpack:///./Scenes/menuScene.json?");

/***/ }),

/***/ "./Scenes/wingamescene.json":
/*!**********************************!*\
  !*** ./Scenes/wingamescene.json ***!
  \**********************************/
/*! exports provided: scene, default */
/***/ (function(module) {

eval("module.exports = {\"scene\":{\"assets\":[{\"type\":\"img\",\"src\":\"../Images/grid.jpg\",\"id\":\"winGameGroundTexture\"}],\"ground\":{\"width\":20,\"height\":20,\"src\":\"#winGameGroundTexture\"},\"sky\":{\"color\":\"#000080\",\"radius\":10},\"items\":[{\"type\":\"a-text\",\"attributes\":[{\"name\":\"value\",\"value\":\"Congratulations!\"},{\"name\":\"color\",\"value\":\"white\"},{\"name\":\"align\",\"value\":\"center\"},{\"name\":\"position\",\"value\":\"1 2 -2\"},{\"name\":\"width\",\"value\":\"15\"},{\"name\":\"height\",\"value\":\"10\"}]}],\"camera\":{\"id\":\"gameOverCamera\",\"position\":\"0 0 2\",\"attributes\":[{\"name\":\"wasd-controls\",\"value\":\"enabled:false\"}]},\"menu_items\":[{\"text\":\"Back to menu\",\"id\":\"\",\"position\":\"1 1 -4\",\"rotation\":\"-60 0 0\"}]}};\n\n//# sourceURL=webpack:///./Scenes/wingamescene.json?");

/***/ }),

/***/ "./Scripts/Components/all-component.js":
/*!*********************************************!*\
  !*** ./Scripts/Components/all-component.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function () {\r\n    __webpack_require__(/*! ./follow */ \"./Scripts/Components/follow.js\");\r\n    __webpack_require__(/*! ./menu-panel */ \"./Scripts/Components/menu-panel.js\");\r\n    __webpack_require__(/*! ./pale-move */ \"./Scripts/Components/pale-move.js\");\r\n    __webpack_require__(/*! ./observer */ \"./Scripts/Components/observer.js\");\r\n}\n\n//# sourceURL=webpack:///./Scripts/Components/all-component.js?");

/***/ }),

/***/ "./Scripts/Components/follow.js":
/*!**************************************!*\
  !*** ./Scripts/Components/follow.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = AFRAME.registerComponent('follow', {\r\n  schema: {\r\n    target: {type: 'selector'},\r\n    speed: {type: 'number'}\r\n  },\r\n\r\n  init: function () {\r\n    this.directionVec3 = new THREE.Vector3();\r\n  },\r\n\r\n  tick: function (time, timeDelta) {\r\n    var directionVec3 = this.directionVec3;\r\n\r\n    // Grab position vectors (THREE.Vector3) from the entities' three.js objects.\r\n    var targetPosition = this.data.target.object3D.position;\r\n    var currentPosition = this.el.object3D.position;\r\n\r\n    // Subtract the vectors to get the direction the entity should head in.\r\n    directionVec3.copy(targetPosition).sub(currentPosition);\r\n\r\n    // Calculate the distance.\r\n    var distance = directionVec3.length();\r\n\r\n    // Don't go any closer if a close proximity has been reached.\r\n    if (distance < 0) { return; }\r\n\r\n    // Scale the direction vector's magnitude down to match the speed.\r\n    var factor = this.data.speed / distance;\r\n    ['x', 'y', 'z'].forEach(function (axis) {\r\n      directionVec3[axis] *= factor * (timeDelta / 1000);\r\n    });\r\n\r\n    // Translate the entity in the direction towards the target.\r\n    this.el.setAttribute('position',targetPosition);\r\n  }\r\n});\n\n//# sourceURL=webpack:///./Scripts/Components/follow.js?");

/***/ }),

/***/ "./Scripts/Components/menu-panel.js":
/*!******************************************!*\
  !*** ./Scripts/Components/menu-panel.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var consts = __webpack_require__(/*! ../constants */ \"./Scripts/constants.js\");\r\nmodule.exports = AFRAME.registerComponent('menu-panel', {\r\n    schema: {\r\n        loadMaskColor: { default: 'green' },\r\n        maskHeight: { default: 0.2 },\r\n        maskWidth: { default: 6 },\r\n        duration: { default: 1.5 },\r\n        text: { default: \"\" },\r\n        textColor: { default: \"black\" },\r\n        backPlaneWidth: { default: 5 },\r\n        blackPlaneHeight: { default: 2 },\r\n        blackPlaneColor: { default: \"white\" }\r\n    },\r\n    init: function () {\r\n        var self = this;\r\n        var el = this.el;\r\n        this.whiteMask = this.createWhiteMask(this.data);\r\n        this.loadMask = this.createLoadMask(this.data);\r\n        this.whiteMask.appendChild(this.loadMask);\r\n        this.startCount = false;\r\n        this.textEl = this.createText(this.data);\r\n        el.appendChild(this.textEl);\r\n        el.appendChild(this.whiteMask);\r\n        el.addEventListener('mouseenter', function () {\r\n            self.startCount = true;\r\n        });\r\n        el.addEventListener('mouseleave', function () {\r\n            self.startCount = false;\r\n        });\r\n    },\r\n    tick: function (t, td) {\r\n        if (this.startCount || this.whiteMaskWatch) {\r\n            this.whiteMask.setAttribute('visible', true);\r\n\r\n            if (this.starTime == null) {\r\n                this.starTime = t;\r\n            }\r\n            var dTime = t - (this.starTime - 0.0001);\r\n            if (dTime >= this.data.duration * 1000) {\r\n                //this.el.setAttribute('visible', false);\r\n                this.el.emit(consts.events.menuclicked, { menu_item_id: this.el.getAttribute('id') });\r\n                this.startCount = false;\r\n                return;\r\n            }\r\n            var loadMaskLength = this.data.maskWidth * dTime / (this.data.duration * 1000);\r\n            var p2 = -1 * (this.data.maskWidth / 2);\r\n            this.loadMask.setAttribute('width', loadMaskLength);\r\n            var p3 = p2 + loadMaskLength / 2;\r\n            this.loadMask.setAttribute('position', { x: p3, y: 0, z: 0.01 });\r\n        } else {\r\n            this.starTime = null;\r\n            this.whiteMask.setAttribute('visible', false);\r\n        }\r\n    },\r\n    createWhiteMask(data) {\r\n        var whiteMask = document.createElement('a-plane');\r\n        whiteMask.setAttribute('visible', false);\r\n        whiteMask.setAttribute('color', 'white');\r\n        whiteMask.setAttribute('width', data.maskWidth);\r\n        whiteMask.setAttribute('height', data.maskHeight);\r\n        whiteMask.setAttribute('position', \"0 -0.6 0.01\");\r\n        whiteMask.parent = this.el;\r\n        whiteMask.addEventListener('mouseenter', function () {\r\n            whiteMask.parent.whiteMaskWatch = true;\r\n        });\r\n        whiteMask.addEventListener('mouseleave', function () {\r\n            whiteMask.parent.whiteMaskWatch = false;\r\n        });\r\n        return whiteMask;\r\n    },\r\n    createLoadMask(data) {\r\n        var loadMask = document.createElement('a-plane');\r\n        loadMask.setAttribute('color', data.loadMaskColor);\r\n        loadMask.setAttribute('width', 0.01);\r\n        loadMask.setAttribute('height', data.maskHeight);\r\n        loadMask.setAttribute('position', \"0 0 0.001\");\r\n        loadMask.parent = this.el;\r\n        return loadMask;\r\n    },\r\n    createText(data) {\r\n        var backPlane = document.createElement('a-plane');\r\n        backPlane.setAttribute(\"color\", data.blackPlaneColor);\r\n        backPlane.setAttribute(\"width\", data.backPlaneWidth);\r\n        backPlane.setAttribute(\"height\", data.blackPlaneHeight);\r\n        backPlane.setAttribute('position', \"0 0 -0.001\");\r\n        var textEl = document.createElement(\"a-text\");\r\n        textEl.setAttribute('position', \"0 0 0.001\");\r\n        textEl.setAttribute(\"value\", data.text);\r\n        textEl.setAttribute(\"color\", data.textColor);\r\n        textEl.setAttribute(\"align\", 'center');\r\n        textEl.setAttribute(\"width\", 10);\r\n        textEl.setAttribute(\"height\", 10);\r\n        textEl.appendChild(backPlane);\r\n        return textEl;\r\n    }\r\n});\n\n//# sourceURL=webpack:///./Scripts/Components/menu-panel.js?");

/***/ }),

/***/ "./Scripts/Components/observer.js":
/*!****************************************!*\
  !*** ./Scripts/Components/observer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MoveControl = __webpack_require__(/*! ../Models/move-control-panel */ \"./Scripts/Models/move-control-panel.js\");\r\nvar SceneNS = __webpack_require__(/*! ../Models/scene */ \"./Scripts/Models/scene.js\");\r\nvar consts = __webpack_require__(/*! ../constants */ \"./Scripts/constants.js\");\r\nmodule.exports = AFRAME.registerComponent('observer', {\r\n    init: function () {\r\n        var scene = this.el.scene;\r\n        this.scene = scene;\r\n\r\n    },\r\n    tick: function (t, td) {\r\n        if (this.player) {\r\n            if (!this.moveControl) {\r\n                var playerPos = this.player.position;\r\n                var moveControlPoition = new THREE.Vector3(playerPos.x, playerPos.y, playerPos.z);\r\n                moveControlPoition.z -= 1;\r\n                this.createMoveControl(moveControlPoition);\r\n            }\r\n            var lookAt = new THREE.Vector3(0, 0, -1);\r\n            lookAt.applyQuaternion(this.player.camera.object3D.quaternion);\r\n            if (this.moveControl) {\r\n                this.moveControl.move(td);\r\n                this.moveControl.switchVisibility(lookAt);\r\n            }\r\n            if(this.scene.lastPaleHit && this.player.el.object3D.position.z <= this.scene.targetZ){\r\n                this.player.el.emit(consts.events.wingame, {});\r\n            }\r\n            this.player.move(td);\r\n        } else {\r\n            this.player = this.scene.player;\r\n            var player = this.player;\r\n            document.addEventListener('keydown', function (event) {\r\n                if (event.code == 'KeyW') {\r\n                    player.moving = true;\r\n                }\r\n            });\r\n            document.addEventListener('keyup', function (event) {\r\n                if (event.code == 'KeyW') {\r\n                    player.moving = false;\r\n                }\r\n            });\r\n        }\r\n\r\n\r\n    },\r\n    createMoveControl: function (data) {\r\n        this.moveControl = new MoveControl.MoveControlPanel(0.5, 0.5, data);\r\n        this.moveControl.player = this.player;\r\n        this.el.appendChild(this.moveControl.el);\r\n    },\r\n    removeMovceControl: function () {\r\n        this.el.removeChild(this.moveControl.el);\r\n    }\r\n});\n\n//# sourceURL=webpack:///./Scripts/Components/observer.js?");

/***/ }),

/***/ "./Scripts/Components/pale-move.js":
/*!*****************************************!*\
  !*** ./Scripts/Components/pale-move.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = AFRAME.registerComponent('move', {\r\n    schema: {\r\n        velocity: { type: 'vec3', default: { x: -1, y: 0, z: 0 } },\r\n        stageLength: { default: 8 }\r\n    },\r\n    init: function () {\r\n\r\n    },\r\n    tick: function (t, td) {\r\n        var position = this.el.object3D.position;\r\n        if (position.x >= this.data.stageLength) {\r\n            var vel = this.data.velocity;\r\n            vel.x *= -1;\r\n            this.el.setAttribute(\"velocity\",vel);\r\n           \r\n        }\r\n        if (position.x <= -1 *this.data.stageLength) {\r\n            var vel = this.data.velocity;\r\n            vel.x *= -1;\r\n            this.el.setAttribute(\"velocity\",vel);\r\n        }\r\n    }\r\n});\n\n//# sourceURL=webpack:///./Scripts/Components/pale-move.js?");

/***/ }),

/***/ "./Scripts/Models/map.js":
/*!*******************************!*\
  !*** ./Scripts/Models/map.js ***!
  \*******************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return Map; });\n/* harmony import */ var _Models_pale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Models/pale */ \"./Scripts/Models/pale.js\");\n\r\nclass Map {\r\n  constructor() {\r\n    this.Pales = new Array();\r\n    var i;\r\n    for (i = 0; i < 10; i++) {\r\n      var item = new _Models_pale__WEBPACK_IMPORTED_MODULE_0__[\"Pale\"](0.5, 5, 5)\r\n      item.position = { x: Math.round(Math.random() * 100) % 5, y: 3, z: -3 - (i * 5) };\r\n      this.Pales.push(item);\r\n    }\r\n  }\r\n  generateMap() {\r\n    var sceneEl = document.querySelector('a-scene');\r\n    this.Pales.forEach((e) => {\r\n      e.element.setAttribute('position', e.position);\r\n      e.element.setAttribute('move', '');\r\n      var x =  Math.random()*5;\r\n      if((Math.floor(Math.random()  * 4.0)) % 2.0 == 0)\r\n        x = -1 *x;\r\n      e.element.setAttribute('velocity', {x: x, y:0,z:0})\r\n      sceneEl.appendChild(e.element);\r\n    })\r\n\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./Scripts/Models/map.js?");

/***/ }),

/***/ "./Scripts/Models/move-control-panel.js":
/*!**********************************************!*\
  !*** ./Scripts/Models/move-control-panel.js ***!
  \**********************************************/
/*! exports provided: MoveControlPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MoveControlPanel\", function() { return MoveControlPanel; });\nvar utils = __webpack_require__(/*! ../utils */ \"./Scripts/utils.js\");\r\nclass MoveControlPanel {\r\n    constructor(height, width, pos) {\r\n        this.height = height;\r\n        this.width = width;\r\n        this.visible = true;\r\n        this.position = pos;\r\n        this.isMoving = false;\r\n        this.player = {};\r\n        this.el = this.createPanel(this);\r\n    }\r\n    createPanel(c) {\r\n        var mcp = document.createElement('a-plane');\r\n        mcp.setAttribute('id', \"mcp\");\r\n        mcp.setAttribute('color', 'gray');\r\n        mcp.setAttribute(\"width\", this.width);\r\n        mcp.setAttribute('height', this.height);\r\n        mcp.setAttribute(\"position\", this.position);\r\n        mcp.setAttribute(\"rotation\", \"-70 50 0\");\r\n        mcp.appendChild(this.createArrowControl(c));\r\n        return mcp;\r\n    }\r\n    createArrowControl(c) {\r\n        var arrow = document.createElement('a-plane');\r\n        arrow.setAttribute('color', 'transparent');\r\n        arrow.setAttribute(\"position\", \"0 0 0.01\");\r\n        arrow.setAttribute(\"width\", 0.5);\r\n        arrow.setAttribute('height', 0.5);\r\n        arrow.setAttribute('src', \"#arrow-inactive\");\r\n        arrow.addEventListener('mouseenter', function () {\r\n            c.isMoving = !c.isMoving;\r\n            c.player.isContinousMoving = !c.player.isContinousMoving;\r\n            c.player.moving = c.isMoving;\r\n            arrow.setAttribute('src', c.getSourceImage(c.isMoving));\r\n        });\r\n        return arrow;\r\n    }\r\n    getSourceImage(i) {\r\n        if (i)\r\n            return \"#arrow-active\";\r\n        else\r\n            return \"#arrow-inactive\";\r\n    }\r\n    switchVisibility() {\r\n        var camLookAt = this.player.getLookAtVector();\r\n        var cameraAngle = camLookAt.angleTo(new THREE.Vector3(0, -1, 0));\r\n        if (utils.toDegree(cameraAngle) < 70) {\r\n            this.visible = true;\r\n\r\n        } else {\r\n            this.visible = false;\r\n        }\r\n        this.el.setAttribute(\"visible\", this.visible);\r\n    }\r\n    move(td) {\r\n        var camLookAt = this.player.getLookAtVector();\r\n\r\n        //this.el.setAttribute(\"position\", nextPos);\r\n        var quaternion = new THREE.Quaternion();\r\n        camLookAt.y = 0;\r\n        var cameraAngle = camLookAt.angleTo(new THREE.Vector3(0, 0, -1));\r\n        // console.log(cameraAngle);\r\n        quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), cameraAngle);\r\n        //console.log(quaternion);\r\n        var camPos = new THREE.Vector3(this.player.position.x,this.player.position.y,this.player.position.z)\r\n        camPos.applyQuaternion(quaternion);\r\n       \r\n        var y = utils.toDegree(cameraAngle);\r\n        if (camLookAt.x > 0) {\r\n            this.el.setAttribute(\"rotation\", { x: -80, y: -y, z: 0 });\r\n        } else {\r\n            this.el.setAttribute(\"rotation\", { x: -80, y: y, z: 0 });\r\n        }\r\n        var nextPos = this.player.getLookAtVector();    \r\n        nextPos.y = 0;   \r\n        var playerPos = this.player.position;\r\n        ['x', 'y', 'z'].forEach(function (axis) {\r\n            nextPos[axis] += playerPos[axis];\r\n        });\r\n        nextPos.y -= 0.2;\r\n        this.el.setAttribute(\"position\", nextPos)\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Scripts/Models/move-control-panel.js?");

/***/ }),

/***/ "./Scripts/Models/pale.js":
/*!********************************!*\
  !*** ./Scripts/Models/pale.js ***!
  \********************************/
/*! exports provided: Pale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pale\", function() { return Pale; });\nclass Pale {\r\n    constructor(height, width, depth, src, position, velocity, color) {\r\n        this.height = height;\r\n        this.width = width;\r\n        this.depth = depth;\r\n        this.position = position;   \r\n        this.src = src;\r\n        this.velocity = velocity;\r\n        this.color = color;\r\n        this.el = this.createPaleElement();\r\n    }\r\n    createPaleElement() {\r\n        var element = document.createElement('a-box');\r\n        element.setAttribute('static-body', '');\r\n        element.setAttribute('position', this.position);\r\n        element.setAttribute('height', this.height);\r\n        element.setAttribute('width', this.width);\r\n        element.setAttribute('depth', this.depth);\r\n        element.setAttribute('velocity', this.velocity)\r\n        element.setAttribute('move', \"velocity:\" + this.velocity)\r\n        if (this.src)\r\n            element.setAttribute('src', this.src);\r\n        else\r\n            element.setAttribute('color', this.color);\r\n\r\n        return element;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Scripts/Models/pale.js?");

/***/ }),

/***/ "./Scripts/Models/player.js":
/*!**********************************!*\
  !*** ./Scripts/Models/player.js ***!
  \**********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\nclass Player {\r\n    constructor(pos) {\r\n        this.position = pos;\r\n        this.el = this.createBody();\r\n        this.moving = false;\r\n        this.end = false;\r\n        var _this = this;\r\n    }\r\n    createBody() {\r\n        var playerEntity = document.createElement('a-box');\r\n\r\n        playerEntity.setAttribute('depth', 1);\r\n        playerEntity.setAttribute('width', 1);\r\n        playerEntity.setAttribute('height', 1);\r\n        playerEntity.setAttribute('id', \"playerEntity\");\r\n        playerEntity.setAttribute('position', this.position);\r\n        playerEntity.setAttribute('dynamic-body', 'mass: 20;');\r\n        var sphere = document.createElement('a-sphere');\r\n        sphere.setAttribute('radius', 0.5);\r\n        var camera = document.createElement('a-camera');\r\n        camera.setAttribute(\"id\", \"playerCamera\");\r\n        this.camera = camera;\r\n        this.camera.setAttribute('wasd-controls', 'enabled:false');\r\n        this.camera.setAttribute('position', '0 -1.1 0');\r\n        var cursor = document.createElement('a-cursor');\r\n        camera.appendChild(cursor);\r\n        playerEntity.appendChild(camera);\r\n        playerEntity.appendChild(sphere);\r\n        return playerEntity;\r\n    }\r\n    move(td) {\r\n         this.position =  this.el.object3D.position;\r\n        if (this.moving) {\r\n            var currPos = this.el.object3D.position;\r\n            var lookAtVector = this.getLookAtVector();\r\n            var distance = lookAtVector.length();\r\n            var factor = 1.5 / distance;\r\n            ['x', 'y', 'z'].forEach(function (axis) {\r\n                lookAtVector[axis] *= factor * (td / 1000);\r\n            });\r\n            this.position = new THREE.Vector3(currPos.x + lookAtVector.x, currPos.y, currPos.z + lookAtVector.z);\r\n            this.el.body.position.set(currPos.x + lookAtVector.x, currPos.y, currPos.z + lookAtVector.z);\r\n        }\r\n    }\r\n    getLookAtVector() {\r\n        this.el.object3D.quaternion.set(new THREE.Vector4(0, 0, 0, 1));\r\n        var currPos = this.el.object3D.position;\r\n        var lookAtVector = new THREE.Vector3(0, 0, -1);\r\n        lookAtVector.applyQuaternion(this.camera.object3D.quaternion);\r\n        return lookAtVector;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Scripts/Models/player.js?");

/***/ }),

/***/ "./Scripts/Models/scene.js":
/*!*********************************!*\
  !*** ./Scripts/Models/scene.js ***!
  \*********************************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Scene\", function() { return Scene; });\n/* harmony import */ var _pale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pale */ \"./Scripts/Models/pale.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./Scripts/Models/player.js\");\n\r\n\r\nvar consts = __webpack_require__(/*! ../constants */ \"./Scripts/constants.js\");\r\nclass Scene {\r\n    constructor(data) {\r\n        this.el = document.querySelector('a-scene');\r\n        this.el.scene = this;\r\n        this.elements = [];\r\n        this.attributes = [];\r\n        this.pales = [];\r\n        this.player = {};\r\n        if (data.assets)\r\n            this.addAssets(data.assets);\r\n        this.elements.push(this.createSky(data.sky));\r\n        this.elements.push(this.createGround(data.ground));\r\n        for (var i = 0; i < this.elements.length; i++) {\r\n            this.el.appendChild(this.elements[i]);\r\n        }\r\n    }\r\n    addAttributes(attributesData) {\r\n        for (var i = 0; i < attributesData.length; i++) {\r\n            this.el.setAttribute(attributesData[i].name, attributesData[i].value);\r\n            this.attributes.push(attributesData[i]);\r\n        }\r\n    }\r\n    createGround(groundData) {\r\n        var ground = document.createElement('a-plane');\r\n        ground.setAttribute(\"position\", groundData.position)\r\n        ground.setAttribute(\"width\", groundData.width);\r\n        ground.setAttribute(\"height\", groundData.height);\r\n        ground.setAttribute(\"rotation\", \"-90 0 0\");\r\n        ground.setAttribute(\"static-body\", \"\")\r\n        if (groundData.src) {\r\n            ground.setAttribute(\"src\", groundData.src)\r\n        } else {\r\n            ground.setAttribute(\"color\", groundData.color)\r\n        }\r\n        ground.setAttribute(\"id\", groundData.id);\r\n        this.ground = ground;\r\n        return ground;\r\n    }\r\n    createSky(skyData) {\r\n        var sky = document.createElement(\"a-sky\");\r\n        sky.setAttribute(\"radius\", skyData.radius);\r\n        if (skyData.src) {\r\n            sky.setAttribute(\"src\", skyData.src)\r\n        } else {\r\n            sky.setAttribute(\"color\", skyData.color)\r\n        }\r\n        sky.setAttribute(\"id\", skyData.id);\r\n        return sky;\r\n    }\r\n    createMenuItem(menuItemData) {\r\n        var menuItem = document.createElement('a-entity');\r\n        if (menuItemData.rotation) {\r\n            menuItem.setAttribute('rotation', menuItemData.rotation);\r\n        } else\r\n            menuItem.setAttribute('rotation', \"0 20 0\");\r\n        menuItem.setAttribute('id', menuItemData.id);\r\n        menuItem.setAttribute('menu-panel', 'text:' + menuItemData.text + \";maskWidth: 4; blackPlaneHeight: 1.5\");\r\n        menuItem.setAttribute('position', menuItemData.position);\r\n        return menuItem;\r\n    }\r\n    createCamera(cameraData) {\r\n        var camera = document.createElement(\"a-camera\");\r\n        camera.setAttribute(\"id\", cameraData.id)\r\n        camera.setAttribute(\"position\", cameraData.position);\r\n        if (cameraData.attributes != null) {\r\n            for (var i = 0; i < cameraData.attributes.length; i++) {\r\n                var attr = cameraData.attributes[i];\r\n                camera.setAttribute(attr.name, attr.value);\r\n            }\r\n        }\r\n        var cursor = document.createElement('a-cursor');\r\n        camera.appendChild(cursor);\r\n        return camera;\r\n    }\r\n    addAssets(assetsData) {\r\n        var assets = document.createElement('a-assets');\r\n        for (var i = 0; i < assetsData.length; i++) {\r\n            var asset = document.createElement(assetsData[i].type);\r\n            asset.setAttribute(\"src\", assetsData[i].src);\r\n            asset.setAttribute(\"id\", assetsData[i].id);\r\n            assets.appendChild(asset);\r\n        }\r\n        this.el.appendChild(assets);\r\n        this.elements.push(assets);\r\n    }\r\n    createPales(paleData, pales) {\r\n        for (var i = 0; i < pales.length; i++) {\r\n            var currentPaleData = pales[i];\r\n            var pale = new _pale__WEBPACK_IMPORTED_MODULE_0__[\"Pale\"](paleData.height, paleData.width, paleData.depth, currentPaleData.src, currentPaleData.position, currentPaleData.velocity, paleData.colors[i % 5]);\r\n            if (currentPaleData.flags) {\r\n                var cylinder1 = document.createElement('a-cylinder');\r\n                cylinder1.setAttribute('height', 4);\r\n                cylinder1.setAttribute('radius', 0.05);\r\n                cylinder1.setAttribute('color', 'red');\r\n                cylinder1.setAttribute('position', currentPaleData.flags[0]);\r\n                //pale.el.appendChild(cylinder1);\r\n                this.el.appendChild(cylinder1);\r\n                var cylinder2 = document.createElement('a-cylinder');\r\n                cylinder2.setAttribute('height', 4);\r\n                cylinder2.setAttribute('radius', 0.05);\r\n                cylinder2.setAttribute('color', 'red');\r\n                cylinder2.setAttribute('position', currentPaleData.flags[1]);\r\n                //pale.el.appendChild(cylinder2);\r\n                this.el.appendChild(cylinder2);\r\n                var flag = document.createElement('a-plane');\r\n                flag.setAttribute('height', 1);\r\n                flag.setAttribute('width', 4);\r\n                flag.setAttribute('src', currentPaleData.src);\r\n               \r\n                flag.setAttribute('position', currentPaleData.flags[2]);\r\n                flag.setAttribute('rotation', '0 0 0');\r\n                this.el.appendChild(flag);\r\n            }\r\n            this.el.appendChild(pale.el);\r\n            this.elements.push(pale.el);\r\n            this.pales.push(pale);\r\n        }\r\n    }\r\n    addPlayer(playerData) {\r\n        var player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"Player\"](playerData.position);\r\n        var ground = this.ground;\r\n        var lastPale = this.pales[this.pales.length - 1];\r\n        this.el.appendChild(player.el);\r\n        this.elements.push(player.el)\r\n        this.player = player;\r\n        var _self = this;\r\n        this.targetZ = playerData.targetZ;\r\n        player.el.addEventListener('collide', function (e) {\r\n            if (e.detail.body.id == ground.body.id) {\r\n                player.el.removeEventListener('collide', {});\r\n                player.el.emit(consts.events.gameover, {});\r\n            }\r\n            if (e.detail.body.id == lastPale.el.body.id) {\r\n                _self.lastPaleHit = true;\r\n            }\r\n        });\r\n    }\r\n    createItems(itemsData) {\r\n        for (var iter in itemsData) {\r\n            var item = itemsData[iter];\r\n            var itemEl = document.createElement(item.type);\r\n            for (var attrIter in item.attributes) {\r\n                var attribute = item.attributes[attrIter];\r\n                itemEl.setAttribute(attribute.name, attribute.value);\r\n            }\r\n            this.elements.push(itemEl);\r\n            this.el.appendChild(itemEl);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Scripts/Models/scene.js?");

/***/ }),

/***/ "./Scripts/SceneBuilder.js":
/*!*********************************!*\
  !*** ./Scripts/SceneBuilder.js ***!
  \*********************************/
/*! exports provided: SceneBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SceneBuilder\", function() { return SceneBuilder; });\n/* harmony import */ var _Models_scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Models/scene */ \"./Scripts/Models/scene.js\");\n\r\nclass SceneBuilder {\r\n    constructor(scene) {\r\n        //this.cleanScene();\r\n        this.scene = new _Models_scene__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"](scene);\r\n        this.data = scene;\r\n    }\r\n    build() {\r\n        var menu_items = this.data.menu_items;\r\n        var cameraData = this.data.camera;\r\n        var paleData = this.data.paleData;\r\n        var pales = this.data.pales;\r\n        var player = this.data.player;\r\n        var attributes = this.data.attributes;\r\n        var items = this.data.items;\r\n        if (menu_items != null) {\r\n            for (var i = 0; i < menu_items.length; i++) {\r\n                var item = menu_items[i];\r\n                var menuItem = this.scene.createMenuItem(item);\r\n                this.scene.elements.push(menuItem);\r\n                this.scene.el.appendChild(menuItem);\r\n            }\r\n        }\r\n        if (cameraData) {\r\n            var camera = this.scene.createCamera(cameraData);\r\n            this.scene.elements.push(camera);\r\n            this.scene.el.appendChild(camera);\r\n        }\r\n        if(paleData){\r\n            this.scene.createPales(paleData,pales);\r\n        }\r\n        if(player){\r\n            this.scene.addPlayer(player);\r\n        }\r\n        if(items){\r\n            this.scene.createItems(items);\r\n        }\r\n        if(attributes){\r\n            this.scene.addAttributes(attributes);\r\n        }\r\n        return this.scene;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Scripts/SceneBuilder.js?");

/***/ }),

/***/ "./Scripts/constants.js":
/*!******************************!*\
  !*** ./Scripts/constants.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n    events:{\r\n        gameover: \"gameover\",\r\n        menuclicked: \"menuclicked\",\r\n        wingame: \"wingame\"\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Scripts/constants.js?");

/***/ }),

/***/ "./Scripts/index.js":
/*!**************************!*\
  !*** ./Scripts/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Models_pale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Models/pale */ \"./Scripts/Models/pale.js\");\n/* harmony import */ var _Models_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Models/map */ \"./Scripts/Models/map.js\");\n/* harmony import */ var _Models_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Models/player */ \"./Scripts/Models/player.js\");\n/* harmony import */ var _Models_move_control_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Models/move-control-panel */ \"./Scripts/Models/move-control-panel.js\");\n/* harmony import */ var _Scripts_SceneBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Scripts/SceneBuilder */ \"./Scripts/SceneBuilder.js\");\n\r\n\r\n\r\n\r\n\r\n__webpack_require__(/*! ./Components/all-component */ \"./Scripts/Components/all-component.js\")();\r\nvar utils = __webpack_require__(/*! ./utils */ \"./Scripts/utils.js\");\r\n\r\ndocument.querySelector('a-scene').addEventListener('loaded', function () {\r\n  var consts = __webpack_require__(/*! ./constants */ \"./Scripts/constants.js\");\r\n\r\n  var scene = getScene();\r\n  var body = document.getElementById('body');\r\n  body.addEventListener(consts.events.menuclicked, function (e) {\r\n    window.location.href = '/?level=' + e.detail.menu_item_id;\r\n  });\r\n  body.addEventListener(consts.events.gameover, function () {\r\n    window.location.href = '/?level=gameover';\r\n  });\r\n  body.addEventListener(consts.events.wingame, function () {\r\n    window.location.href = '/?level=wingame';\r\n  });\r\n  console.log();\r\n});\r\n\r\nfunction getParameterByName(name, url) {\r\n  if (!url) url = window.location.href;\r\n  name = name.replace(/[\\[\\]]/g, \"\\\\$&\");\r\n  var regex = new RegExp(\"[?&]\" + name + \"(=([^&#]*)|&|#|$)\"),\r\n    results = regex.exec(url);\r\n  if (!results) return null;\r\n  if (!results[2]) return '';\r\n  return decodeURIComponent(results[2].replace(/\\+/g, \" \"));\r\n}\r\n\r\nfunction getScene() {\r\n\r\n  var levelname = getParameterByName('level');\r\n  if (!levelname) {\r\n    var menuScene = __webpack_require__(/*! ../Scenes/menuScene */ \"./Scenes/menuScene.json\");\r\n    var builder = new _Scripts_SceneBuilder__WEBPACK_IMPORTED_MODULE_4__[\"SceneBuilder\"](menuScene.scene);\r\n    builder.build();\r\n  }\r\n  if (levelname == 'level1') {\r\n    var level1scene = __webpack_require__(/*! ../Scenes/Levels/level1 */ \"./Scenes/Levels/level1.json\");\r\n    var builder = new _Scripts_SceneBuilder__WEBPACK_IMPORTED_MODULE_4__[\"SceneBuilder\"](level1scene.scene);\r\n    builder.build();\r\n  }\r\n  if (levelname == 'level2') {\r\n    var level2scene = __webpack_require__(/*! ../Scenes/Levels/level2 */ \"./Scenes/Levels/level2.json\");\r\n    var builder = new _Scripts_SceneBuilder__WEBPACK_IMPORTED_MODULE_4__[\"SceneBuilder\"](level2scene.scene);\r\n    builder.build();\r\n  }\r\n  if (levelname == 'gameover') {\r\n    var gameOverScene = __webpack_require__(/*! ../Scenes/gameoverscene */ \"./Scenes/gameoverscene.json\");\r\n    var builder = new _Scripts_SceneBuilder__WEBPACK_IMPORTED_MODULE_4__[\"SceneBuilder\"](gameOverScene.scene);\r\n    builder.build();\r\n  }\r\n  if (levelname == 'wingame') {\r\n    var wingameScene = __webpack_require__(/*! ../Scenes/wingamescene */ \"./Scenes/wingamescene.json\");\r\n    var builder = new _Scripts_SceneBuilder__WEBPACK_IMPORTED_MODULE_4__[\"SceneBuilder\"](wingameScene.scene);\r\n    builder.build();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./Scripts/index.js?");

/***/ }),

/***/ "./Scripts/utils.js":
/*!**************************!*\
  !*** ./Scripts/utils.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n    toDegree: function (radians) {\r\n        return radians * (180 / Math.PI);\r\n    },\r\n    toRadian: function(degree){\r\n        return degree * Math.PI / 180;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Scripts/utils.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./Scripts/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Scripts/index.js */\"./Scripts/index.js\");\n\n\n//# sourceURL=webpack:///multi_./Scripts/index.js?");

/***/ })

/******/ });