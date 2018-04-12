module.exports = AFRAME.registerComponent('move', {
    schema: {
        velocity: { type: 'vec3', default: { x: -1, y: 0, z: 0 } },
        stageLength: { default: 8 }
    },
    init: function () {

    },
    tick: function (t, td) {
        var position = this.el.object3D.position;
        if (position.x >= this.data.stageLength) {
            var vel = this.data.velocity;
            vel.x *= -1;
            this.el.setAttribute("velocity",vel);
           
        }
        if (position.x <= -1 *this.data.stageLength) {
            var vel = this.data.velocity;
            vel.x *= -1;
            this.el.setAttribute("velocity",vel);
        }
    }
});