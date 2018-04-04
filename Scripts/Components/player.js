
module.exports = AFRAME.registerComponent('player', {
    init: function () {
        this.player = document.playerEntity;
    },
    tick: function (t, td) {
        if (player.isMoveEnabled) {
            move(td);
            if (!player.isContinousMoving)
                player.moving = false;
        }
    }
});