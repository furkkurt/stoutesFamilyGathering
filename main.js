var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 450,
  scale: {
    mode: Phaser.Scale.FIT,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
  scene: [preloader, intro, enterance, hallway, stairs, bedroom, kitchen, bathroom, rooftop, basement, drive, interrogation, guessing, chase, shooter, end],
  pixelArt: true
};

var game = new Phaser.Game(config);
