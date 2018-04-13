export class Player {
    constructor(pos) {
        this.position = pos;
        this.el = this.createBody();
        this.moving = false;
        this.end = false;
        var _this = this;
    }
    createBody() {
        var playerEntity = document.createElement('a-entity');
        playerEntity.setAttribute('id', "playerEntity");
        playerEntity.setAttribute('position', this.position);
        playerEntity.setAttribute('dynamic-body', 'mass: 15; shape: box');
        var sphere = document.createElement('a-sphere');
        sphere.setAttribute('radius', 0.5);
        var camera = document.createElement('a-camera');
        camera.setAttribute("id", "playerCamera");
        this.camera = camera;
        this.camera.setAttribute('wasd-controls', 'enabled:false');
        this.camera.setAttribute('position', '0 -1.1 0');
        var cursor = document.createElement('a-cursor');
        camera.appendChild(cursor);
        playerEntity.appendChild(camera);
        playerEntity.appendChild(sphere);
        return playerEntity;
    }
    move(td) {
         this.position =  this.el.object3D.position;
        if (this.moving) {
            var currPos = this.el.object3D.position;
            var lookAtVector = this.getLookAtVector();
            var distance = lookAtVector.length();
            var factor = 1.5 / distance;
            ['x', 'y', 'z'].forEach(function (axis) {
                lookAtVector[axis] *= factor * (td / 1000);
            });
            this.position = new THREE.Vector3(currPos.x + lookAtVector.x, currPos.y, currPos.z + lookAtVector.z);
            this.el.body.position.set(currPos.x + lookAtVector.x, currPos.y, currPos.z + lookAtVector.z);
        }
    }
    getLookAtVector() {
        this.el.object3D.quaternion.set(new THREE.Vector4(0, 0, 0, 1));
        var currPos = this.el.object3D.position;
        var lookAtVector = new THREE.Vector3(0, 0, -1);
        lookAtVector.applyQuaternion(this.camera.object3D.quaternion);
        return lookAtVector;
    }
}