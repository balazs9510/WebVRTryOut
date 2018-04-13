var MoveControl = require("../Models/move-control-panel");
var SceneNS = require("../Models/scene");

module.exports = AFRAME.registerComponent('observer', {
    init: function () {
        var scene = this.el.scene;
        this.scene = scene;
        var player = scene.player
        this.player = player;

    },
    tick: function (t, td) {
        var player = this.player;
        if (Object.keys(player).length !== 0 || player.constructor !== Object) {
            var lookAt = new THREE.Vector3(0, 0, -1);
            lookAt.applyQuaternion(player.camera.object3D.quaternion);
            if (this.moveControl) {
                this.moveControl.move(td);
                this.moveControl.switchVisibility(lookAt);
            }
            player.move(td);
        }
        this.player = this.scene.player;
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