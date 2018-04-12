var utils = require('../utils');
export class MoveControlPanel {
    constructor(height, width, pos) {
        this.height = height;
        this.width = width;
        this.visible = true;
        this.position = pos;
        this.isMoving = false;
        this.player = {};
        this.el = this.createPanel(this);
    }
    createPanel(c) {
        var mcp = document.createElement('a-plane');
        mcp.setAttribute('id', "mcp");
        mcp.setAttribute('color', 'gray');
        mcp.setAttribute("width", this.width);
        mcp.setAttribute('height', this.height);
        mcp.setAttribute("position", this.position);
        mcp.setAttribute("rotation", "-70 50 0");
        mcp.appendChild(this.createArrowControl(c));
        return mcp;
    }
    createArrowControl(c) {
        var arrow = document.createElement('a-plane');
        arrow.setAttribute('color', 'transparent');
        arrow.setAttribute("position", "0 0 0.01");
        arrow.setAttribute("width", 0.5);
        arrow.setAttribute('height', 0.5);
        arrow.setAttribute('src', "#arrow-inactive");
        arrow.addEventListener('mouseenter', function () {
            c.isMoving = !c.isMoving;
            c.player.isContinousMoving = !c.player.isContinousMoving;
            c.player.moving = c.isMoving;
            arrow.setAttribute('src', c.getSourceImage(c.isMoving));
        });
        return arrow;
    }
    getSourceImage(i) {
        if (i)
            return "#arrow-active";
        else
            return "#arrow-inactive";
    }
    switchVisibility() {
        var camLookAt = this.player.getLookAtVector();
        var cameraAngle = camLookAt.angleTo(new THREE.Vector3(0, -1, 0));
        console.log(utils.toDegree(cameraAngle));
        if (utils.toDegree(cameraAngle) < 80) {
            this.visible = true;

        } else {
            this.visible = false;
        }
        this.el.setAttribute("visible", this.visible);
    }
    move(td) {
        var camLookAt = this.player.getLookAtVector();

        //this.el.setAttribute("position", nextPos);
        var quaternion = new THREE.Quaternion();
        camLookAt.y = 0;
        var cameraAngle = camLookAt.angleTo(new THREE.Vector3(0, 0, -1));
        // console.log(cameraAngle);
        quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), cameraAngle);
        //console.log(quaternion);
        var camPos = new THREE.Vector3(this.player.position.x,this.player.position.y,this.player.position.z)
        camPos.applyQuaternion(quaternion);
       
        var y = utils.toDegree(cameraAngle);
        if (camLookAt.x > 0) {
            this.el.setAttribute("rotation", { x: -80, y: -y, z: 0 });
        } else {
            this.el.setAttribute("rotation", { x: -80, y: y, z: 0 });
        }
        var nextPos = this.player.getLookAtVector();    
        nextPos.y = 0;    
        var playerPos = this.player.position;
        ['x', 'y', 'z'].forEach(function (axis) {
            nextPos[axis] += playerPos[axis];
        });
        nextPos.y -= 0.2;
        this.el.setAttribute("position", nextPos)
    }
}