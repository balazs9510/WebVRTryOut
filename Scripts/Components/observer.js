var MoveControl = require("../Models/move-control-panel");

module.exports = AFRAME.registerComponent('observer', {
    tick: function (t, td) {
        if (this.player) {
            var lookAt = new THREE.Vector3(0, 0, -1);
            lookAt.applyQuaternion(this.player.camera.object3D.quaternion);
            // console.log(this.camera.object3D.getWorldPosition());
            if (this.moveControl) {
                this.moveControl.setPosition(lookAt, this.player.el.object3D.position);
                this.moveControl.switchVisibility(lookAt);
            }

        }
    },
    createMoveControl: function (data) {
        this.moveControl = new MoveControl.MoveControlPanel(1, 1, data);
        this.moveControl.player = this.player;
        this.el.appendChild(this.moveControl.el);
    },
    removeMovceControl: function(){
        this.el.removeChild(this.moveControl.el);
    }
});