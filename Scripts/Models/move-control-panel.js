var utils = require('../utils');
export class MoveControlPanel {
    constructor(height, width, pos) {
        this.height = height;
        this.width = width;
        this.visible = true;
        this.position = pos;
        this.el = this.createPanel();
    }
    createPanel() {
        var mcp = document.createElement('a-plane');
        mcp.setAttribute('color', 'gray');
        mcp.setAttribute("width", this.width);
        mcp.setAttribute('height', this.height);
        mcp.setAttribute("position", this.position);
        mcp.setAttribute("rotation", "-10 1 0");
        return mcp;
    }
    switchVisibility() {
        this.visible = !this.visible;
        this.el.setAttribute("visible", this.visible);
    }
    setPosition(camLookAt, camPos) {
        var quaternion = new THREE.Quaternion();
        camLookAt.y = 0;
        var cameraAngle = camLookAt.angleTo(new THREE.Vector3(0,0,-1));
        console.log(cameraAngle);
        quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0),cameraAngle);
        camPos.z -= 6;
        camPos.applyQuaternion(quaternion);
        var y =utils.toDegree(cameraAngle);
        if (camPos.x > 0) {
            this.el.setAttribute("rotation", { x: -10, y: -y, z: 0 });
        } else {
            this.el.setAttribute("rotation", { x: -10, y: y, z: 0 });
        }
        this.el.setAttribute("position", camPos);
    }
}