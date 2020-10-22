class Scene3 extends Phaser.Scene {
  constructor() {
    super('pauseGame');
  }
  create() {
    // let bg = this.add.sprite(this.scale.width / 2, this.scale.height / 2, "black");

    this.bg = this.add.sprite(
      this.scale.width / 2,
      this.scale.height / 2,
      'black'
    );
    // bonanza.setScale(4)
    // bg.setOrigin(0, 0)
    this.add.text(95, 120, 'PAUSED');
    this.add.text(30, 150, 'Press ENTER to resume');
    this.bg.alpha = 0.5;

    this.pausetheme = this.sound.add('pausetheme');
    this.pausetheme.play();

    this.input.keyboard.on(
      'keydown-ENTER',
      function () {
        this.pausetheme.stop();
        this.scene.stop();
        this.scene.resume('playGame');
        this.scene.sounds.musicStop();
      },
      this
    );

    this.input.on(
      'pointerdown',
      function () {
        this.pausetheme.stop();
        this.scene.stop();
        this.scene.resume('playGame');
      },
      this
    );
  }
}
