export class Pale {
    constructor(height, width, depth) {
        this.height = height;
        this.width = width;
        this.depth = depth;
        this.position =  new THREE.Vector3();
        this.element = {};
        this.src = "";
        this.prevPale = null;
        this.nextPale = null;
        this.createPaleElement();
    }
    createPaleElement() {
        var element = document.createElement('a-box');
        element.setAttribute('static-body', '');
        element.setAttribute('position', this.position);
        element.setAttribute('height', this.height);
        element.setAttribute('width', this.width);
        element.setAttribute('depth', this.depth);
        element.setAttribute('velocity', '0 0 0')
        if (this.src != "")
            element.setAttribute('src', this.src);
        else element.setAttribute('color', "blue");

        this.element = element;
    }
}