var MoveControl = require("../Models/move-control-panel");

module.exports = AFRAME.registerComponent('observer', {
    init: function () {
        this.camera = document.querySelector('a-camera');
        this.moveControl = new MoveControl.MoveControlPanel(3,5,new THREE.Vector3(-3,0.2,-6));
        this.el.appendChild(this.moveControl.el);
    },
    tick: function (t, td) {
        var lookAt = new THREE.Vector3(0,0,-1);
        lookAt.applyQuaternion(this.camera.object3D.quaternion);
        this.moveControl.setPosition(lookAt, this.camera.object3D.getWorldPosition());
    }
});