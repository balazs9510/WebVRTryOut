module.exports = AFRAME.registerComponent('menu-panel', {
    schema: {
        loadMaskColor: { default: 'green' },
        maskHeight: { default: 0.2 },
        maskWidth: { default: 6 },
        duration: { default: 1.5 },
        text: { default: "" },
        textColor: { default: "black" },
        backPlaneWidth: { default: 5 },
        blackPlaneHeight: { default: 2 },
        blackPlaneColor: { default: "white" }
    },
    init: function () {
        var self = this;
        var el = this.el;
        this.whiteMask = this.createWhiteMask(this.data);
        this.loadMask = this.createLoadMask(this.data);
        this.whiteMask.appendChild(this.loadMask);
        this.startCount = false;
        this.textEl = this.createText(this.data);
        el.appendChild(this.textEl);
        el.appendChild(this.whiteMask);
        el.addEventListener('mouseenter', function () {
            self.startCount = true;
        });
        el.addEventListener('mouseleave', function () {
            self.startCount = false;
        });
    },
    tick: function (t, td) {
        if (this.startCount || this.whiteMaskWatch) {
            this.whiteMask.setAttribute('visible', true);

            if (this.starTime == null) {
                this.starTime = t;
            }
            var dTime = t - (this.starTime - 0.0001);
            if (dTime >= this.data.duration * 1000) {
               //this.el.setAttribute('visible', false);
                this.el.emit('menuclicked', { menu_item_id: this.el.getAttribute('id') });
                this.startCount = false;
                return;
            }
            var loadMaskLength = this.data.maskWidth * dTime / (this.data.duration * 1000);
            var p2 = -1 * (this.data.maskWidth / 2);
            this.loadMask.setAttribute('width', loadMaskLength);
            var p3 = p2 + loadMaskLength / 2;
            this.loadMask.setAttribute('position', { x: p3, y: 0, z: 0.01 });
        } else {
            this.starTime = null;
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
        whiteMask.parent = this.el;
        whiteMask.addEventListener('mouseenter', function () {
            whiteMask.parent.whiteMaskWatch = true;
        });
        whiteMask.addEventListener('mouseleave', function () {
            whiteMask.parent.whiteMaskWatch = false;
        });
        return whiteMask;
    },
    createLoadMask(data) {
        var loadMask = document.createElement('a-plane');
        loadMask.setAttribute('color', data.loadMaskColor);
        loadMask.setAttribute('width', 0.01);
        loadMask.setAttribute('height', data.maskHeight);
        loadMask.setAttribute('position', "0 0 0.001");
        loadMask.parent = this.el;
        return loadMask;
    },
    createText(data) {
        var backPlane = document.createElement('a-plane');
        backPlane.setAttribute("color", data.blackPlaneColor);
        backPlane.setAttribute("width", data.backPlaneWidth);
        backPlane.setAttribute("height", data.blackPlaneHeight);
        backPlane.setAttribute('position', "0 0 -0.001");
        var textEl = document.createElement("a-text");
        textEl.setAttribute('position', "0 0 0.001");
        textEl.setAttribute("value", data.text);
        textEl.setAttribute("color", data.textColor);
        textEl.setAttribute("align", 'center');
        textEl.setAttribute("width", 10);
        textEl.setAttribute("height", 10);
        textEl.appendChild(backPlane);
        return textEl;
    }
});