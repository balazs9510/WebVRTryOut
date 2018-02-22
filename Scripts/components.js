window.webvr = window.webvr || {};
AFRAME.registerComponent('move', {
    schema: {
        target: { type: 'selector' },
        speed: { type: 'number' }
    },
    init: function () {
        this.el.dataset.isMoving = false;
        this.el.addEventListener('x-pressed', function (event) {
            if (this.dataset.isMoving == "true")
                this.dataset.isMoving = false
            else
                this.dataset.isMoving = true;
        });

    },
    tick: function (time, timeDelta) {
        if (this.el.dataset.isMoving == "true")
            this.el.body.velocity.x = -10;
        else
            this.el.body.velocity.x = 0;
    }
});

AFRAME.registerComponent('pale-move', {
    schema: {
        play: { type: 'bool' }
    },
    tick: function (t, td) {
        var position = this.el.object3D.position;
        if (position.x >= 5) {
            this.el.setAttribute("velocity", "-1 0 0")
        }
        if (position.x <= -5) {
            this.el.setAttribute("velocity", "3 0 0")
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
            self.whiteMask.replaceChild(self.loadMask,oldMask);
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
                this.el.setAttribute('visible',false);
                this.el.emit('menuclicked', { menu_item_id: this.el.getAttribute('id') });
                this.startCount = false;
                return;
            }
            this.loadMask.setAttribute('width', loadMaskLength);
            var p3 = p2 + loadMaskLength / 2;
            this.loadMask.setAttribute('position', { x: p3, y: 0, z: 0.01 });
            console.log(loadMaskLength);
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