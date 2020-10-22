class Storm extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, 'stormeagle');
    config.scene.add.existing(this);
    this.setInteractive();
    // scene.physics.world.enableBody(this);
  }

  update() {}

  move(ship, speed) {
    const random = Math.floor(Math.random() * 2);
    ship.x = 256;
    if (random == 0) {
      ship.y += speed;
      ship.x += speed;
    } else if (random == 1) {
      ship.y += speed;
      ship.x -= speed;
    }
    console.log(random);
    console.log(ship.x);
    if (ship.y > 272) {
      this.scene.resetShipPos(ship);
    }
  }

  //   move(ship, speed) {
  //     var random = Phaser.Math.Between(0, 1);

  //     if (random == 0) {
  //       ship.isRight = true;
  //       ship.flipX = false;
  //     } else if (random == 1) {
  //       ship.isRight = false;
  //       ship.flipX = true;
  //     }

  //     if (ship.isRight) {
  //       ship.x += speed;
  //       ship.y += speed;
  //     } else {
  //       ship.x -= speed;
  //       ship.y += speed;
  //     }

  //     if (ship.y > 272) {
  //       this.scene.resetShipPos(ship);
  //     }
  //   }
}
