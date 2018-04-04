module.exports = AFRAME.registerComponent('player', {
    tick: function (t, td) {
        var player = document.player;
        if (player)
            if (player.isMoveEnabled) {
                player.move(td);
                if (!player.isContinousMoving)
                    player.moving = false;
            }
    }
});