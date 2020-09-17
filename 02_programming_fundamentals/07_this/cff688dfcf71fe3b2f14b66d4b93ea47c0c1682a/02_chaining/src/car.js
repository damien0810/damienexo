const car = {
  speed: 0,
  minute: 0,
  distance: 0,

  start: function () {
    this.speed = 0;
    this.minute = 0;
    this.distance = 0;
    return this;
  },
  changeSpeed: function (newSpeed) {
    this.speed = newSpeed;
    return this;
  },
  drive: function (newMinute) {
    this.minute;
    this.distance = this.distance + (this.speed * newMinute) / 60 ;
    return this;
  },
  showDistance: function () {
    console.log(`${this.distance} Km`);
    return this;
  },
};
module.exports = car;
