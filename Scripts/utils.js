module.exports = {
    toDegree: function (radians) {
        return radians * (180 / Math.PI);
    },
    toRadian: function(degree){
        return degree * Math.PI / 180;
    }
}