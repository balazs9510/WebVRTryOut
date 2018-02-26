window.webvr = window.webvr || {};

AFRAME.registerComponent('move', {
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
AFRAME.registerComponent('menu-panel', {
    schema: {
        loadMaskColor: { default: 'green' },
        maskHeight: { default: 0.2 },
        maskWidth: { default: 6 },
        duration: { default: 1.5 }
    },
    init: function () {
        var self = this;
        var el = this.el;
        this.whiteMask = this.createWhiteMask(this.data);
        this.loadMask = this.createLoadMask(this.data);
        this.whiteMask.appendChild(this.loadMask);
        this.startCount = false;
        el.appendChild(this.whiteMask);
        el.addEventListener('mouseenter', function () {
            self.startCount = true;
        });
        el.addEventListener('mouseleave', function () {
            self.startCount = false;
            var oldMask = self.loadMask;
            self.loadMask = self.createLoadMask(self.data);
            self.whiteMask.replaceChild(self.loadMask, oldMask);
            self.whiteMask.setAttribute('visible', false);
            self.starTime = null;
        });
    },
    tick: function (t, td) {
        if (this.startCount) {
            this.whiteMask.setAttribute('visible', true);

            if (this.starTime == null) {
                this.starTime = t;
            }
            var dTime = t - (this.starTime - 0.0001);
            var loadMaskLength = this.data.maskWidth * dTime / (this.data.duration * 1000);
            var p2 = -1 * (this.data.maskWidth / 2);
            if (dTime >= this.data.duration * 1000) {
                this.el.setAttribute('visible', false);
                this.el.emit('menuclicked', { menu_item_id: this.el.getAttribute('id') });
                this.startCount = false;
                return;
            }
            this.loadMask.setAttribute('width', loadMaskLength);
            var p3 = p2 + loadMaskLength / 2;
            this.loadMask.setAttribute('position', { x: p3, y: 0, z: 0.01 });
        } else {
            this.whiteMask.setAttribute('visible', false);
        }
    },
    createWhiteMask(data) {
        var whiteMask = document.createElement('a-plane');
        whiteMask.setAttribute('visible', false);
        whiteMask.setAttribute('color', 'white');
        whiteMask.setAttribute('width', data.maskWidth);
        whiteMask.setAttribute('height', data.maskHeight);
        whiteMask.setAttribute('position', "0 -0.6 0.01");
        return whiteMask;
    },
    createLoadMask(data) {
        var loadMask = document.createElement('a-plane');
        loadMask.setAttribute('color', data.loadMaskColor);
        loadMask.setAttribute('width', 0.01);
        loadMask.setAttribute('height', data.maskHeight);
        loadMask.setAttribute('position', "0 0 0.001");
        return loadMask;
    }
});