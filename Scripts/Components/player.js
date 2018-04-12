module.exports = AFRAME.registerComponent('player', {
    init: function(){

    },
    tick: function (t, td) {
        var player = this.player;
        if (player) {
            if (player.isMoveEnabled) {
                player.move(td);
                if (!player.isContinousMoving)
                    player.moving = false;
            }
        }

    }
});