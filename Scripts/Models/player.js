export class Player {
    constructor(pos) {
        this.position = pos;
        this.el = this.createBody();
        this.isMoveEnabled = false;
        this.isContinousMoving = false;
        this.moving = false;
        var _this = this;
        this.el.addEventListener('menuclicked', function () {
            _this.isMoveEnabled = true;
        });
    }
    createBody() {
        var playerEntity = document.createElement('a-entity');
        playerEntity.setAttribute('id', "playerEntity");
        playerEntity.setAttribute('player','');
        playerEntity.setAttribute('position', this.position);
        playerEntity.setAttribute('dynamic-body', 'mass: 30; shape: box');
        var sphere = document.createElement('a-sphere');
        sphere.setAttribute('radius', 0.5);
        var camera = document.createElement('a-camera');
        this.camera = camera;
        this.camera.setAttribute('wasd-controls', 'enabled:false');
        this.camera.setAttribute('position', '0 -1.5 0');
        var cursor = document.createElement('a-cursor');
        camera.appendChild(cursor);
        playerEntity.appendChild(camera);
        playerEntity.appendChild(sphere);
        return playerEntity;
    }
    move(td) {
        if (this.moving) {
            var currPos = this.el.object3D.position;
            var lookAtVector = new THREE.Vector3(0, 0, -1);
            lookAtVector.applyQuaternion(this.camera.object3D.quaternion);
            var distance = lookAtVector.length();
            var factor = 10 / distance;
            ['x', 'y', 'z'].forEach(function (axis) {
                lookAtVector[axis] *= factor * (td / 1000);
            });
            this.lookAtVector = lookAtVector;
            this.nextPost = { x: currPos.x + lookAtVector.x, y: currPos.y, z: currPos.z + lookAtVector.z };
            this.el.body.position.set(currPos.x + lookAtVector.x, currPos.y, currPos.z + lookAtVector.z);
        }
    }
}