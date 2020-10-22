var gameSettings = {
  playerSpeed: 200,
};

var config = {
  type: Phaser.CANVAS,
  width: 256,
  height: 350,
  backgroundColor: 0x000000,
  input: {
    activePointers: 3,
  },
  scene: [PreloadScene, Scene1, Scene2, Scene3, Scene4],
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  scale: {
    // Fit to window
    mode: Phaser.Scale.FIT,
    // Center vertically and horizontally
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};
var newTimer;
var configFX = {
  volume: 0.5,
};

var configBT = {
  volume: 2.7,
};

var musicConfig = {
  mute: false,
  volume: 0.7,
  rate: 1,
  detune: 0,
  seek: 0,
  loop: false,
  delay: 0,
};

var gameOver = false;

var game = new Phaser.Game(config);
var counter = 0;
var text = 0;
