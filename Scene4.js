class Scene4 extends Phaser.Scene {
  constructor() {
    super('gameOver');
  }
  create() {
    // let bg = this.add.sprite(this.scale.width / 2, this.scale.height / 2, "black");
    console.log(this.scene.manager.scenes[2]);
    console.log(this.scene.manager);
    this.bg = this.add.sprite(
      this.scale.width / 2,
      this.scale.height / 2,
      'black'
    );
    // bonanza.setScale(4)
    // bg.setOrigin(0, 0)
    this.add.bitmapText(71, 110, 'pixelFont', 'GAME OVER', 32);
    this.add.bitmapText(58, 170, 'pixelFont', `Press ENTER to play again`, 16);
    this.add.bitmapText(
      100,
      145,
      'pixelFont',
      `SCORE: ${this.scene.manager.scenes[2].score}`,
      16
    );
    this.bg.alpha = 0.5;

    this.input.keyboard.on(
      'keydown-ENTER',
      function () {
        this.scene.stop();

        this.scene.start('playGame');
      },
      this
    );

    this.input.on(
      'pointerdown',
      function () {
        this.scene.stop();
        this.scene.start('playGame');
      },
      this
    );
  }
}
