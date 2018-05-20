var MoveControl = require("../Models/move-control-panel");
var SceneNS = require("../Models/scene");
var consts = require('../constants');
module.exports = AFRAME.registerComponent('observer', {
    init: function () {
        var scene = this.el.scene;
        this.scene = scene;

    },
    tick: function (t, td) {
        if (this.player) {
            if (!this.moveControl) {
                var playerPos = this.player.position;
                var moveControlPoition = new THREE.Vector3(playerPos.x, playerPos.y, playerPos.z);
                moveControlPoition.z -= 1;
                this.createMoveControl(moveControlPoition);
            }
            var lookAt = new THREE.Vector3(0, 0, -1);
            lookAt.applyQuaternion(this.player.camera.object3D.quaternion);
            if (this.moveControl) {
                this.moveControl.move(td);
                this.moveControl.switchVisibility(lookAt);
            }
            if(this.scene.lastPaleHit && this.player.el.object3D.position.z <= this.scene.targetZ){
                this.player.el.emit(consts.events.wingame, {});
            }
            this.player.move(td);
        } else {
            this.player = this.scene.player;
            var player = this.player;
            document.addEventListener('keydown', function (event) {
                if (event.code == 'KeyW') {
                    player.moving = true;
                }
            });
            document.addEventListener('keyup', function (event) {
                if (event.code == 'KeyW') {
                    player.moving = false;
                }
            });
        }


    },
    createMoveControl: function (data) {
        this.moveControl = new MoveControl.MoveControlPanel(0.5, 0.5, data);
        this.moveControl.player = this.player;
        this.el.appendChild(this.moveControl.el);
    },
    removeMovceControl: function () {
        this.el.removeChild(this.moveControl.el);
    }
});