export class Pale {
    constructor(height, width, depth, src, position, velocity, color) {
        this.height = height;
        this.width = width;
        this.depth = depth;
        this.position = position;   
        this.src = src;
        this.velocity = velocity;
        this.color = color;
        this.el = this.createPaleElement();
    }
    createPaleElement() {
        var element = document.createElement('a-box');
        element.setAttribute('static-body', '');
        element.setAttribute('position', this.position);
        element.setAttribute('height', this.height);
        element.setAttribute('width', this.width);
        element.setAttribute('depth', this.depth);
        element.setAttribute('velocity', this.velocity)
        element.setAttribute('move', "velocity:" + this.velocity)
        if (this.src)
            element.setAttribute('src', this.src);
        else
            element.setAttribute('color', this.color);

        return element;
    }
}