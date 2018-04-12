module.exports = AFRAME.registerComponent('move', {
    schema: {
        velocity: { type: 'vec3', default: { x: -1, y: 0, z: 0 } },
        way: { type: 'string', default: "TwoWay" },
        to: {  type: 'vec3', default: { x: 10, y: 0, z: 0 } }
    },
    init: function(){

    },
    tick: function (t, td) {
        var position = this.el.object3D.position;
        if (this.data.way == "TwoWay") {
            if (position.x >= this.data.to.x) {
                this.el.setAttribute("velocity", this.data.velocity)
            }
            if (position.x <= -1 * this.data.to.x) {
                var vel = this.data.velocity;
               // console.log(vel);
                this.el.setAttribute("velocity", {x : -1 * vel.x, y: vel.y, z: vel.z});
            }
        }else{
            if (position.y <= this.data.to.y) {
                this.el.setAttribute("velocity", this.data.velocity)
            }else{
                this.el.setAttribute("velocity", '0 0 0');
            }
        }
    }
});