import { Scene } from './Models/scene';
export class SceneBuilder {
    constructor(scene) {
        //this.cleanScene();
        this.scene = new Scene(scene);
        this.data = scene;
    }
    cleanScene(prevScene) {
        prevScene.removeElements();
    }
    build() {
        var menu_items = this.data.menu_items;
        var cameraData = this.data.camera;
        if (menu_items != null) {
            for (var i = 0; i < menu_items.length; i++) {
                var item = menu_items[i];
                var menuItem = this.scene.createMenuItem(item);
                this.scene.elements.push(menuItem);
                this.scene.el.appendChild(menuItem);
            }
        }
        if (cameraData) {
            var camera = this.scene.createCamera(cameraData);
            this.scene.elements.push(camera);
            this.scene.el.appendChild(camera);
        }
        return this.scene;
    }
}