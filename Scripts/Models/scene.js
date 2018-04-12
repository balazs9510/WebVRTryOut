export class Scene {
    constructor(data) {
        this.el = document.querySelector('a-scene');
        this.elements = [];
        this.elements.push(this.createSky(data.sky));
        this.elements.push(this.createGround(data.ground));
        for (var i = 0; i < this.elements.length; i++) {
           this.el.appendChild(this.elements[i]);
        }
    }
    createGround(groundData) {
        var ground = document.createElement('a-plane');
        ground.setAttribute("position", groundData.position)
        ground.setAttribute("width", groundData.width);
        ground.setAttribute("height", groundData.height);
        ground.setAttribute("rotation", "-90 0 0");
        ground.setAttribute("static-body", "")
        if (groundData.src) {
            ground.setAttribute("src", groundData.src)
        } else {
            ground.setAttribute("color", groundData.color)
        }
        ground.setAttribute("id", groundData.id);
        return ground;
    }
    createSky(skyData) {
        var sky = document.createElement("a-sky");
        sky.setAttribute("radius", skyData.radius);
        if (skyData.src) {
            sky.setAttribute("src", skyData.src)
        } else {
            sky.setAttribute("color", "#6EBAA7")
        }
        sky.setAttribute("id", skyData.id);
        return sky;
    }
    removeElements(){
        for (var i = 0; i < this.elements.length; i++) {
           this.el.replaceChild(this.elements[i]);
        }
    }
    createMenuItem(menuItemData){
        var menuItem = document.createElement('a-entity');
        menuItem.setAttribute('rotation',"0 20 0"),
        menuItem.setAttribute('id', menuItemData.id),
        menuItem.setAttribute('menu-panel', 'text:'+menuItemData.text+";maskWidth: 4; blackPlaneHeight: 1.5");
        menuItem.setAttribute('position', menuItemData.position);
        return menuItem;
    }
    createCamera(cameraData){
        var camera = document.createElement("a-camera");
        camera.setAttribute("id", cameraData.id)
        camera.setAttribute("position", cameraData.position);
        if(cameraData.attributes != null){
            for(var i = 0; i < cameraData.attributes.length; i++){
                var attr = cameraData.attributes[i];
                camera.setAttribute(attr.name, attr.value);
            }
        }
        var cursor = document.createElement('a-cursor');
        camera.appendChild(cursor);
        return camera;
    }
}