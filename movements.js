class Movement extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene);
  }

  update() {}

  move(ship, speed) {
    ship.y += speed;
    if (ship.y > 272) {
      this.scene.resetShipPos(ship);
    }
  }

  moveUp(ship, speed) {
    ship.y -= speed;
    if (ship.y < 0) {
      this.scene.resetUpPos(ship);
    }
  }

  moveShip2(ship, speed) {
    ship.y += speed;

    if (ship.y >= 230) {
      ship.x += 3;
    } else if (ship.y >= 180) {
      ship.x -= 3;
    } else if (ship.y >= 130) {
      ship.x += 3;
    } else if (ship.y >= 80) {
      ship.x -= 3;
    } else if (ship.y >= 30) {
      ship.x += 3;
    }

    if (ship.y > 272 || ship.x > 256 || ship.x < 0) {
      this.scene.resetShipPos(ship);
    }
  }

  moveShip3(ship, speed) {
    ship.y += speed;

    if (ship.y >= 230) {
      ship.x += 4;
    } else if (ship.y >= 180) {
      ship.x -= 4;
    } else if (ship.y >= 130) {
      ship.x += 4;
    } else if (ship.y >= 80) {
      ship.x -= 4;
    } else if (ship.y >= 30) {
      ship.x += 4;
    }

    if (ship.y > 272 || ship.x > 256 || ship.x < 0) {
      this.scene.resetShipPos2(ship);
    }
  }
  moveBtSpider(ship, speed) {
    if (ship.x <= 0) ship.isRight = true;
    else if (ship.x >= 250) ship.isRight = false;

    if (ship.isRight) ship.x += speed;
    else ship.x -= speed;
  }

  movePowerUps(powerup, speed) {
    var tween = this.scene.tweens.add({
      targets: powerup,
      y: -10,
      x: 200,
      ease: 'Power1',
      duration: 2000,
      repeat: 0,
      onComplete: function () {
        y: -10;
      },
    });
    if (powerup.y < 0) {
      powerup.destroy();
    }
  }
  moveLips(ship) {
    this.scene.lipssound.play();
    this.scene.summons -= 1;
    var timeline = this.scene.tweens.createTimeline();

    timeline.add({
      targets: this.scene.lips,
      y: 25,
      ease: 'Power1',
      duration: 200,
    });
    timeline.add({
      targets: this.scene.lips,
      x: 250,
      ease: 'Power1',
      duration: 500,
    });

    timeline.add({
      targets: this.scene.lips,
      y: 100,
      ease: 'Power1',
      duration: 200,
    });

    timeline.add({
      targets: this.scene.lips,
      x: 25,
      ease: 'Power1',
      duration: 500,
    });

    timeline.add({
      targets: this.scene.lips,
      y: 175,
      ease: 'Power1',
      duration: 200,
    });

    timeline.add({
      targets: this.scene.lips,
      x: 250,
      ease: 'Power1',
      duration: 500,
    });

    timeline.add({
      targets: this.scene.lips,
      y: 250,
      ease: 'Power1',
      duration: 200,
    });

    timeline.add({
      targets: this.scene.lips,
      x: 25,
      ease: 'Power1',
      duration: 500,
    });
    timeline.add({
      targets: this.scene.lips,
      y: -50,
      ease: 'Power1',
      duration: 500,
    });

    timeline.play();
  }
}
