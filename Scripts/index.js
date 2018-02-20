window.webvr = window.webvr ||{};
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
    // var dirVec3 = new THREE.Vector3(1,0,0);
    // // Grab position vectors (THREE.Vector3) from the entities' three.js objects.
    // var currentPosition = this.el.object3D.position;
    // var distance = dirVec3.length();
    // // Don't go any closer if a close proximity has been reached.
    // if (distance < 1) { return; }
    // // Scale the direction vector's magnitude down to match the speed.
    // var factor = this.data.speed / distance;
    // ['x', 'y', 'z'].forEach(function (axis) {
    //   dirVec3[axis] *= factor * (timeDelta / 1000);
    // });
    // // Translate the entity in the direction towards the target.
    // this.el.setAttribute('position', {
    //   x: currentPosition.x + dirVec3.x,
    //   y: currentPosition.y + dirVec3.y,
    //   z: currentPosition.z + dirVec3.z
    // });
    if (this.el.dataset.isMoving == "true")
      this.el.body.velocity.x = -10;
    else
      this.el.body.velocity.x = 0;
  }
});

AFRAME.registerComponent('follow', {
  schema: {
    target: { type: 'selector' },
    speed: { type: 'number' }
  },
  init: function () {
    this.directionVec3 = new THREE.Vector3();
  },
  tick: function (time, timeDelta) {
    var directionVec3 = this.directionVec3;
    // Grab position vectors (THREE.Vector3) from the entities' three.js objects.
    var targetPosition = this.data.target.object3D.position;
    var currentPosition = this.el.object3D.position;
    // Subtract the vectors to get the direction the entity should head in.
    directionVec3.copy(targetPosition).sub(currentPosition);
    // Calculate the distance.
    var distance = directionVec3.length();
    // Don't go any closer if a close proximity has been reached.
    if (distance < 1) { return; }
    // Scale the direction vector's magnitude down to match the speed.
    var factor = this.data.speed / distance;
    ['x', 'y', 'z'].forEach(function (axis) {
      directionVec3[axis] *= factor * (timeDelta / 1000);
    });
    // Translate the entity in the direction towards the target.
    this.el.setAttribute('position', {
      x: currentPosition.x + directionVec3.x,
      y: currentPosition.y + directionVec3.y,
      z: currentPosition.z + directionVec3.z
    });
    //console.log(time);
  }
});
AFRAME.registerComponent('pale-move',{
  schema: {
    play: { type: 'bool' }
  },
  tick: function (t, td) {
    var position = this.el.object3D.position;
    if(position.x >= 5){
      this.el.setAttribute("velocity", "-1 0 0")
    }
    if(position.x <= -5){
      this.el.setAttribute("velocity", "3 0 0")
    }
  }
});
// function addAnimation(htmlElement, y, z) {
//   var el = htmlElement;
//   // <a-animation attribute="position" to="-1 -2 -3" direction="alternate" dur="2000" repeat="indefinite"></a-animation>
//   var animation = document.createElement('a-animation');
//   animation.setAttribute('attribute', 'position');
//   animation.setAttribute('direction', 'alternate');
//   animation.setAttribute('repeat', 'indefinite');
//   animation.setAttribute('to', Math.round(Math.random() * 10) % 12 + " " + y + " " + z);
//   animation.setAttribute('dur', durations[Math.round(Math.random() * 10) % durations.length]);
//   el.appendChild(animation);
// }
class Map {
  constructor() {
    this.Pales = new Array();
    var i;
    for (i = 0; i < 10; i++) {
      var item = new Pale(0.5, 5, 5)
      item.position = { x: Math.round(Math.random() * 100) % 5, y: 3, z: -3 - (i * 5) };
      this.Pales.push(item);
    }
    var startPale = new Pale(0.5, 5, 5);
    startPale.src = "#start";
    startPale.position = { x: 0, y: -2, z: 2 };
    this.Pales.push(startPale);
  }
  generateMap() {
    var sceneEl = document.querySelector('a-scene');
    this.Pales.forEach((e) => {
      e.element.setAttribute('position', e.position);
      e.element.setAttribute('pale-move','');
      e.element.setAttribute('velocity', '1 0 0')
      sceneEl.appendChild(e.element);
    })
  }

}
