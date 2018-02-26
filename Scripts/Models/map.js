window.webvr = window.webvr || {};
class Map {
  constructor() {
    this.Pales = new Array();
    var i;
    for (i = 0; i < 10; i++) {
      var item = new Pale(0.5, 5, 5)
      item.position = { x: Math.round(Math.random() * 100) % 5, y: 3, z: -3 - (i * 5) };
      this.Pales.push(item);
    }
  }
  generateMap() {
    var sceneEl = document.querySelector('a-scene');
    this.Pales.forEach((e) => {
      e.element.setAttribute('position', e.position);
      e.element.setAttribute('move', '');
      e.element.setAttribute('velocity', '1 0 0')
      sceneEl.appendChild(e.element);
    })

  }
}