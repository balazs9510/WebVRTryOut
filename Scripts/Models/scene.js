import { Pale } from "./pale"
import { Player } from "./player"
var consts = require('../constants');
export class Scene {
    constructor(data) {
        this.el = document.querySelector('a-scene');
        this.el.scene = this;
        this.elements = [];
        this.attributes = [];
        this.player = {};
        if (data.assets)
            this.addAssets(data.assets);
        this.elements.push(this.createSky(data.sky));
        this.elements.push(this.createGround(data.ground));
        for (var i = 0; i < this.elements.length; i++) {
            this.el.appendChild(this.elements[i]);
        }
    }
    addAttributes(attributesData) {
        for (var i = 0; i < attributesData.length; i++) {
            this.el.setAttribute(attributesData[i].name, attributesData[i].value);
            this.attributes.push(attributesData[i]);
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
        this.ground = ground;
        return ground;
    }
    createSky(skyData) {
        var sky = document.createElement("a-sky");
        sky.setAttribute("radius", skyData.radius);
        if (skyData.src) {
            sky.setAttribute("src", skyData.src)
        } else {
            sky.setAttribute("color", skyData.color)
        }
        sky.setAttribute("id", skyData.id);
        return sky;
    }
    removeElements() {
        for (var i = 0; i < this.elements.length; i++) {
            this.el.removeChild(this.elements[i]);
        }
    }
    removeAttributes() {
        for (var i = 0; i < this.attributes.length; i++) {
            this.el.removeAttribute(this.attributes[i].name);
        }
    }
    createMenuItem(menuItemData) {
        var menuItem = document.createElement('a-entity');
        menuItem.setAttribute('rotation', "0 20 0"),
            menuItem.setAttribute('id', menuItemData.id),
            menuItem.setAttribute('menu-panel', 'text:' + menuItemData.text + ";maskWidth: 4; blackPlaneHeight: 1.5");
        menuItem.setAttribute('position', menuItemData.position);
        return menuItem;
    }
    createCamera(cameraData) {
        var camera = document.createElement("a-camera");
        camera.setAttribute("id", cameraData.id)
        camera.setAttribute("position", cameraData.position);
        if (cameraData.attributes != null) {
            for (var i = 0; i < cameraData.attributes.length; i++) {
                var attr = cameraData.attributes[i];
                camera.setAttribute(attr.name, attr.value);
            }
        }
        var cursor = document.createElement('a-cursor');
        camera.appendChild(cursor);
        return camera;
    }
    addAssets(assetsData) {
        var assets = document.createElement('a-assets');
        for (var i = 0; i < assetsData.length; i++) {
            var asset = document.createElement(assetsData[i].type);
            asset.setAttribute("src", assetsData[i].src);
            asset.setAttribute("id", assetsData[i].id);
            assets.appendChild(asset);
        }
        this.el.appendChild(assets);
        this.elements.push(assets);
    }
    createPales(paleData, pales) {
        for (var i = 0; i < pales.length; i++) {
            var currentPaleData = pales[i];
            var pale = new Pale(paleData.height, paleData.width, paleData.depth, currentPaleData.src, currentPaleData.position, currentPaleData.velocity, paleData.colors[i % 5]);
            this.el.appendChild(pale.el);
            this.elements.push(pale.el);
        }
    }
    addPlayer(playerData) {
        var player = new Player(playerData.position);
        var ground = this.ground;
        this.el.appendChild(player.el);
        this.elements.push(player.el)
        this.player = player;
        var _self  = this;
        player.el.addEventListener('collide', function (e) {
            if (e.detail.body.id == ground.body.id) {
                player.el.removeEventListener('collide',{});
                player.el.emit(consts.events.gameover,{});
            }
        });
    }
    createItems(itemsData) {
        for (var iter in itemsData) {
            var item = itemsData[iter];
            var itemEl = document.createElement(item.type);
            for (var attrIter in item.attributes) {
                var attribute = item.attributes[attrIter];
                itemEl.setAttribute(attribute.name, attribute.value);
            }
            this.elements.push(itemEl);
            this.el.appendChild(itemEl);
        }
    }
}