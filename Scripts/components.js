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
AFRAME.registerComponent('start', {
  tick: function (t, dt) {
    var el = this.el;
    if (this.greenMaskLength >= 5)
      return;
    if (el.dataset.started == "true") {
      var whiteMask = document.getElementById('whiteLoadingMask');
      var greenMask = document.getElementById('greenLoadingMask');
      whiteMask.setAttribute('visible', 'true');

      if (this.starTime == null) {
        this.starTime = t;
        this.greenMaskLength = 0;
      }
      var dTime = t - (this.starTime - 1);
      var p2 = whiteMask.object3D.position.x - (whiteMask.getAttribute('width') / 2 - 0.3);
      //összhossz 4,7
      this.greenMaskLength = dTime / 300;
      if (this.greenMaskLength >= 4.55) {
        el.setAttribute('visible', 'false');
        var map = new Map();
        map.generateMap();
        el.removeAttribute('start');
        return;
      }
      greenMask.setAttribute('width', this.greenMaskLength);
      var p3 = p2 + this.greenMaskLength / 2;
      greenMask.setAttribute('position', { x: p3, y: 0, z: 0.01 });
    }
    console.log(t);
  }
});