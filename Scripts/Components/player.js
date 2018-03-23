
module.exports = AFRAME.registerComponent('player', {
    schema: {
    },
    init: function () {
        this.position = this.el.object3D.position;
        this.el.setAttribute('dynamic-body', 'mass: 30; shape: box');
        this.createPlayerBody();
        var _this = this;
        this.gamestarted = false;
        this.el.addEventListener('menuclicked', function () {
            _this.gamestarted = true;
        });
    },
    tick: function (t, td) {
        if(this.el.body !== undefined)
        this.el.body.quaternion.set(0,0,0,1);
        if (!this.gamestarted) return;
        if (this.wpressed) {
            // Move position
            var currPos = this.el.object3D.position;
            var lookAtVector = new THREE.Vector3(0, 0, -1);
            lookAtVector.applyQuaternion(this.camera.object3D.quaternion);
            var distance = lookAtVector.length();
            var factor = 10 / distance;
            ['x', 'y', 'z'].forEach(function (axis) {
                lookAtVector[axis] *= factor * (td / 1000);
            });
            this.lookAtVector = lookAtVector;
            this.nextPost = {x: currPos.x + lookAtVector.x , y: currPos.y, z:  currPos.z + lookAtVector.z};
            this.el.body.position.set(currPos.x + lookAtVector.x , currPos.y, currPos.z + lookAtVector.z )

            this.wpressed = false;
            // var lookAtVector = new THREE.Vector3(0, 0, -1);
            // lookAtVector.applyQuaternion(this.camera.object3D.quaternion);
            // this.el.body.velocity.set(0,0,0);
            // this.el.body.applyImpulse(
            //     new CANNON.Vec3(lookAtVector.x
            //     , 0, lookAtVector.z ),
            //     new CANNON.Vec3().copy(this.el.object3D.getWorldPosition())
            // );
        }
    },
    createPlayerBody() {
        let el = this.el;
        var sphere = document.createElement('a-sphere');
        sphere.setAttribute('radius', 0.5);
        this.camera = document.getElementById('camera');
        var camera = document.createElement('a-camera');
        this.camera = camera;
        camera.setAttribute('wasd-controls', 'enabled:false');
        camera.setAttribute('position', '0 -1.5 0');
        var cursor = document.createElement('a-cursor');
        camera.appendChild(cursor);
        el.camera = camera;
        el.appendChild(camera);
        el.appendChild(sphere);
    }

});