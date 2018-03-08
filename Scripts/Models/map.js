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
      var x =  Math.random()*5;
      if((Math.floor(Math.random()  * 4.0)) % 2.0 == 0)
        x = -1 *x;
      console.log(x);
      e.element.setAttribute('velocity', {x: x, y:0,z:0})
      sceneEl.appendChild(e.element);
    })

  }
}